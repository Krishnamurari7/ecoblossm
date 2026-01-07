"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/app/data";

export default function ProductShowcase() {
  return (
    <section className="py-24 px-4 bg-eco-cream dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl mb-16 text-eco-dark dark:text-white">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {products.map((item, index) => (
            <Link href={`/product/${item.id}`} key={item.id} className={`${item.size} block`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 p-6 w-full text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                  <p className="font-sans font-bold">{item.price}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}