"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/app/data";
import { Filter, ChevronRight, PackageCheck } from "lucide-react";

export default function Catalog() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filteredProducts = products.filter(p => filter === "All" ? true : p.category === filter);

  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 px-4 pb-20 text-eco-dark dark:text-white">
      
      {/* Header */}
      <motion.div 
        className="max-w-7xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="text-eco-accent font-bold uppercase tracking-widest text-xs mb-4 block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Wholesale & Export
        </motion.span>
        <motion.h1 
          className="font-serif text-5xl md:text-7xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Product Catalog
        </motion.h1>
        <motion.p 
          className="text-gray-500 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
           Browse our range of export-quality botanicals and handicrafts. 
           We specialize in private labeling and bulk container shipments.
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Sidebar Filters */}
        <motion.div 
          className="hidden lg:block space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
           <div className="sticky top-32">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><Filter size={20}/> Categories</h3>
              <div className="space-y-2">
                 {categories.map((cat, i) => (
                   <motion.button 
                     key={cat} 
                     onClick={() => setFilter(cat)}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.05 }}
                     whileHover={{ x: 5, scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className={`block w-full text-left px-4 py-3 rounded-lg transition-all flex justify-between items-center ${
                       filter === cat 
                       ? "bg-eco-dark text-white shadow-md" 
                       : "hover:bg-white hover:shadow-sm dark:hover:bg-gray-900"
                     }`}
                   >
                     {cat} {filter === cat && <motion.div
                       initial={{ scale: 0, rotate: -180 }}
                       animate={{ scale: 1, rotate: 0 }}
                       transition={{ type: "spring", stiffness: 300 }}
                     ><ChevronRight size={16}/></motion.div>}
                   </motion.button>
                 ))}
              </div>
              
              <motion.div 
                className="mt-10 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                 <h4 className="font-bold mb-2">Need Customization?</h4>
                 <p className="text-sm text-gray-500 mb-4">We offer OEM/ODM services for bulk orders.</p>
                 <Link href="/contact" className="text-eco-accent text-sm font-bold hover:underline flex items-center gap-1 group">
                   Contact Sales 
                   <motion.span
                     animate={{ x: [0, 5, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                   >
                     →
                   </motion.span>
                 </Link>
              </motion.div>
           </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
           <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <AnimatePresence>
               {filteredProducts.length === 0 ? (
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="col-span-2 text-center py-20"
                 >
                   <p className="text-gray-500 dark:text-gray-400 text-lg">
                     No products found in this category.
                   </p>
                 </motion.div>
               ) : (
                 filteredProducts.map((item, index) => (
                 <motion.div
                   layout
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: -20 }}
                   transition={{ 
                     duration: 0.4,
                     delay: index * 0.05,
                     type: "spring",
                     stiffness: 100
                   }}
                   whileHover={{ 
                     y: -10,
                     scale: 1.02,
                     transition: { type: "spring", stiffness: 300 }
                   }}
                   key={item.id}
                   className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 relative"
                 >
                   {/* Animated Background Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/0 to-eco-DEFAULT/0 group-hover:from-eco-DEFAULT/5 group-hover:to-transparent transition-all duration-500 rounded-3xl z-0"></div>
                   
                   <div className="relative h-[300px] overflow-hidden z-10">
                      <motion.img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute top-4 right-4 bg-eco-dark/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1 }}
                      >
                         Export Quality
                      </motion.div>
                   </div>
                   
                   <div className="p-8 relative z-10">
                      <motion.p 
                        className="text-eco-accent text-xs font-bold uppercase tracking-widest mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {item.category}
                      </motion.p>
                      <h3 className="font-serif text-2xl mb-4 group-hover:text-eco-DEFAULT transition-colors">{item.name}</h3>
                      
                      {/* MOQ Display */}
                      <motion.div 
                        className="text-sm text-gray-600 dark:text-gray-400 mb-6 bg-gray-50 dark:bg-black/20 p-4 rounded-xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                         <div>
                            <span className="block text-xs font-bold uppercase text-gray-400">MOQ</span>
                            <span className="font-medium text-eco-dark dark:text-white">{item.moq}</span>
                         </div>
                      </motion.div>

                      <Link href={`/product/${item.id}`}>
                        <motion.div
                          className="block w-full py-4 text-center border border-eco-dark dark:border-gray-700 rounded-xl font-bold hover:bg-eco-dark hover:text-white dark:hover:bg-white dark:hover:text-eco-dark transition-all relative overflow-hidden group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="relative z-10">View Details & Request</span>
                          <motion.div
                            className="absolute inset-0 bg-eco-DEFAULT"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </Link>
                   </div>
                 </motion.div>
               ))
               )}
             </AnimatePresence>
           </motion.div>
        </motion.div>

      </div>
    </main>
  );
}