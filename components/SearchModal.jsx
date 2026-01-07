"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/app/data";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") setResults([]);
    else {
      const searchTerm = query.toLowerCase();
      setResults(products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.category.toLowerCase().includes(searchTerm) ||
        (p.description && p.description.toLowerCase().includes(searchTerm))
      ));
    }
  }, [query]);

  // Prevent background scroll and clear query when closing
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-eco-cream/95 dark:bg-gray-950/95 backdrop-blur-xl flex flex-col pt-24 px-4"
        >
          <button onClick={onClose} className="absolute top-8 right-8 p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
            <X size={24} className="text-gray-800 dark:text-white"/>
          </button>

          <div className="max-w-3xl mx-auto w-full">
            <div className="relative border-b-2 border-gray-300 dark:border-gray-700 focus-within:border-eco-accent transition-colors">
              <Search className="absolute left-0 top-4 text-gray-400" size={28} />
              <input 
                autoFocus type="text" placeholder="Search products, categories..." 
                className="w-full bg-transparent py-4 pl-12 text-3xl font-serif text-eco-dark dark:text-white focus:outline-none placeholder:text-gray-300"
                value={query} onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    onClose();
                  }
                }}
              />
            </div>

            <div className="mt-10 max-h-[60vh] overflow-y-auto">
              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.map(product => (
                    <Link key={product.id} href={`/product/${product.id}`} onClick={onClose}>
                      <div className="flex items-center gap-4 p-4 hover:bg-white dark:hover:bg-gray-900 rounded-xl transition cursor-pointer group">
                        <img src={product.img} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-1">
                          <h4 className="font-serif text-lg text-gray-800 dark:text-white group-hover:text-eco-DEFAULT transition-colors">{product.name}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{product.category}</p>
                        </div>
                        <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-eco-DEFAULT"/>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : query !== "" ? (
                <motion.p 
                  className="text-center text-gray-400 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  No results found for "{query}".
                </motion.p>
              ) : (
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                   <p className="text-sm uppercase font-bold text-gray-400 mb-4">Popular Categories</p>
                   <div className="flex flex-wrap gap-2">
                     {['Superfoods', 'Bio-Fuel', 'Organic Fertilizer', 'Dehydrated Spices'].map(t => (
                       <motion.button 
                         key={t} 
                         onClick={() => setQuery(t)} 
                         className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm hover:bg-eco-DEFAULT hover:text-white transition-colors"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         {t}
                       </motion.button>
                     ))}
                   </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}