"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const text = "SUSTAINABLE • ORGANIC • HANDCRAFTED • ECO-FRIENDLY • ";
  
  return (
    <div className="bg-eco-dark text-eco-light py-4 overflow-hidden border-y border-eco-accent/30">
      <motion.div 
        className="flex whitespace-nowrap text-3xl md:text-5xl font-serif italic opacity-80"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {Array(4).fill(text).map((item, i) => (
          <span key={i} className="mx-4">{item}</span>
        ))}
      </motion.div>
    </div>
  );
}