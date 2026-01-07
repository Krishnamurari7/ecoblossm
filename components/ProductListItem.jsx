"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductListItem({ product }) {
  if (!product) return null;

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex items-center gap-6 p-6"
        whileHover={{ scale: 1.01 }}
      >
        <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-eco-accent transition-colors truncate">
                {product.name}
              </h3>
              <p className="text-xs text-eco-accent font-bold uppercase tracking-widest mb-2">
                {product.category}
              </p>
            </div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ x: 5 }}
            >
              <ArrowRight size={20} className="text-gray-400 group-hover:text-eco-accent transition-colors" />
            </motion.div>
          </div>

          {product.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
              {product.description.substring(0, 120)}...
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}