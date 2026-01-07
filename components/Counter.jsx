"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ value, className }) {
    const ref = useRef(null);

    // Parse numeric part and suffix
    const match = value.toString().match(/^([\d.]+)(.*)$/);
    const number = match ? parseFloat(match[1]) : 0;
    const suffix = match ? match[2] : value;

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30, // Lower damping = more oscillation, Higher = less.
        stiffness: 70, // Higher stiffness = faster.
    });
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    useEffect(() => {
        if (isInView && match) {
            motionValue.set(number);
        }
    }, [motionValue, isInView, number, match]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Determine precision based on original input
                // If original was "1.2", we want 1 decimal. If "200", 0 decimals.
                const isFloat = match && match[1].includes(".");
                const formattedNumber = isFloat ? latest.toFixed(1) : Math.round(latest).toString();

                ref.current.textContent = match ? `${formattedNumber}${suffix}` : suffix;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix, match]); // suffix and match are stable if value is stable

    // Initial render content
    return <span className={className} ref={ref}>{match ? 0 + suffix : value}</span>;
}
