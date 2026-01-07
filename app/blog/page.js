"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/app/blogData"; // Ensure path is correct
import { ArrowUpRight, Calendar, User, TrendingUp, Tag } from "lucide-react";

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(blogPosts.map(p => p.category))];

  // Filter Logic
  const filteredPosts = blogPosts.filter(p => filter === "All" ? true : p.category === filter);
  const featuredPost = filteredPosts[0]; // First post as Hero
  const gridPosts = filteredPosts.slice(1);

  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-20">
      
      {/* 1. HERO HEADER */}
      <motion.section 
        className="text-center max-w-4xl mx-auto px-4 mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="text-eco-accent font-bold tracking-widest uppercase text-xs mb-4 block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Knowledge Hub
        </motion.span>
        <motion.h1 
          className="font-serif text-5xl md:text-7xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Global Trade Insights.
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
           Expert analysis on logistics, sustainable farming, and international market trends.
        </motion.p>
      </motion.section>

      {/* 2. CATEGORY TABS */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 mb-12 overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
         <div className="flex gap-4 justify-center min-w-max">
            {categories.map((cat, i) => (
               <motion.button 
                 key={cat} 
                 onClick={() => setFilter(cat)}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5 + i * 0.1 }}
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all ${
                    filter === cat 
                    ? "bg-eco-dark text-white border-eco-dark shadow-lg" 
                    : "border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900"
                 }`}
               >
                 {cat}
               </motion.button>
            ))}
         </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* 3. FEATURED POST (Big Card) */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.id}`}>
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-[2.5rem] overflow-hidden h-[500px] mb-20 shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-800"
            >
              <motion.img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                   <span className="bg-eco-accent text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">{featuredPost.category}</span>
                   <span className="text-white/80 text-sm flex items-center gap-2"><Calendar size={14}/> {featuredPost.date}</span>
                </motion.div>
                {/* <motion.h2 
                  className="font-serif text-3xl md:text-5xl text-white mb-6 max-w-3xl leading-tight group-hover:underline decoration-eco-accent underline-offset-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {featuredPost.title}
                </motion.h2> */}
                <motion.div 
                  className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                   Read Analysis <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                </motion.div>
              </div>
            </motion.div>
          </Link>
        )}

        {/* 4. RECENT ARTICLES GRID */}
        <motion.div 
          className="flex items-center gap-2 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
           <TrendingUp className="text-eco-accent"/>
           <h3 className="font-bold text-xl uppercase tracking-widest">Latest Reports</h3>
        </motion.div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <AnimatePresence mode="wait">
            {gridPosts.map((post, index) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
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
                  className="group cursor-pointer flex flex-col h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 relative"
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/0 to-eco-DEFAULT/0 group-hover:from-eco-DEFAULT/5 group-hover:to-transparent transition-all duration-500 rounded-3xl z-0"></div>
                  
                  <div className="rounded-2xl overflow-hidden h-64 mb-6 relative z-10">
                     <motion.img 
                       src={post.image} 
                       alt={post.title} 
                       className="w-full h-full"
                       whileHover={{ scale: 1.15 }}
                       transition={{ duration: 0.7, ease: "easeOut" }}
                     />
                     <motion.div 
                       className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm"
                       initial={{ scale: 0, rotate: -180 }}
                       animate={{ scale: 1, rotate: 0 }}
                       transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                     >
                        {post.category}
                     </motion.div>
                  </div>
                  
                  <div className="px-6 pb-6 relative z-10">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 uppercase font-bold tracking-wider">
                       <span>{post.date}</span>
                       <span>•</span>
                       <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-serif text-2xl mb-3 leading-snug group-hover:text-eco-accent transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <motion.span 
                      className="flex items-center gap-2 text-xs font-bold text-eco-dark dark:text-white uppercase tracking-widest border-t border-gray-100 dark:border-gray-800 pt-4 group-hover:border-eco-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Full Report <ArrowUpRight size={14} />
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {gridPosts.length === 0 && (
           <div className="text-center py-20 text-gray-400">
              No articles found in this category.
           </div>
        )}

      </div>
    </main>
  );
}