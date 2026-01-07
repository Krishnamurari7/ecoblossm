"use client";
import { motion } from "framer-motion";
import { Star, Quote, Globe, Sparkles } from "lucide-react";

// 1. Dummy Data for International Clients
const testimonials = [
  {
    id: 1,
    name: "Sanjay Patel",
    role: "Procurement Head, OrganicLife UK",
    country: "New Delhi, India",
    img: "/boy.jpg",
    text: "Eco Blossom has been our most reliable partner for premium millet sourcing. The quality consistency across multiple container loads is outstanding, and their documentation is always perfect for EU customs.",
    stars: 5,
  },
  {
    id: 2,
    name: "Khushi kumari",
    role: "Director, Oasis Imports LLC",
    country: "Assam, India",
    img: "/girl.jpg",
    text: "We appreciate their professional approach to B2B trade. The turmeric powder quality exceeded our expectations, and the packaging ensured zero damage during transit to Dubai.",
    stars: 5,
  },
  {
    id: 3,
    name: "Manish Gupta",
    role: "CEO, GreenMarket GmbH",
    country: "Punjab, India",
    img: "/boy1.jpg",
    text: "Finding a truly sustainable supplier was difficult until we met this team. Their transparency regarding farm practices and their commitment to eco-friendly logistics is exactly what our German customers demand.",
    stars: 4,
  },
  {
    id: 4,
    name: "Rohit Sharma",
    role: "Founder, NutriHerbs Co.",
    country: "Rajasthan, India",
    img: "/boy2.jpg",
    text: "Excellent communication and timely delivery. The Moringa powder specifications matched samples exactly. A trustworthy partner for long-term business.",
    stars: 5,
  },
  {
    id: 5,
    name: "Priya Singh",
    role: "Export Manager, Natural Foods Inc.",
    country: "Mumbai, India",
    img: "/girl1.jpg",
    text: "Outstanding quality control and customer service. Their organic certification process is thorough, and they always deliver on time. Highly recommended for international trade.",
    stars: 5,
  },
  {
    id: 6,
    name: "Amit Kumar",
    role: "Business Owner, Health Plus",
    country: "Bangalore, India",
    img: "/boy3.jpg",
    text: "The best supplier we've worked with. Their products are consistently high quality, and their team is always responsive to our needs. Great value for money!",
    stars: 5,
  },
];

// Create multiple copies for seamless infinite scroll (4 copies for smoother loop)
const marqueeData = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  // Calculate the width of one set of testimonials
  const singleSetWidth = 100 / 4; // Since we have 4 copies, each set is 25%

  return (
    <section className="py-16 md:py-24 bg-eco-cream dark:bg-gray-950 overflow-hidden relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
          <motion.span 
            className="text-eco-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <Globe size={14}/> Client Trust
          </motion.span>
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-eco-dark dark:text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Trusted by Partners.
          </motion.h2>
          <motion.p 
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Don't just take our word for it. Hear from procurement managers and business owners across the globe.
          </motion.p>
        </motion.div>
      </div>

      {/* 2. INFINITE MARQUEE CAROUSEL - Continuous Forward Scroll */}
      <div className="relative w-full z-10 py-4 md:py-8">
         {/* Enhanced Gradients for smooth fade on edges - Dark/Light mode support */}
         <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 lg:w-64 bg-gradient-to-r from-eco-cream via-eco-cream/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 z-30 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 lg:w-64 bg-gradient-to-l from-eco-cream via-eco-cream/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 z-30 pointer-events-none"></div>
         
         <div className="flex overflow-hidden">
           <motion.div
             className="flex gap-4 sm:gap-6 md:gap-8 will-change-transform"
             // Continuous forward scroll - moves by exactly one set (25%) then resets seamlessly
             animate={{ 
               x: [`0%`, `-${singleSetWidth}%`]
             }} 
             transition={{
               repeat: Infinity,
               ease: "linear",
               duration: 60, // Smooth continuous scroll speed
               repeatType: "loop",
             }}
             style={{
               width: `${marqueeData.length * (100 / 4)}%` // Total width for all items
             }}
           >
             {marqueeData.map((item, idx) => (
               <motion.div 
                  key={`${item.id}-${idx}`}
                  className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] lg:w-[420px] xl:w-[450px] flex-shrink-0 p-5 sm:p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg dark:shadow-gray-900/50 relative group hover:shadow-2xl dark:hover:shadow-eco-DEFAULT/20 transition-all duration-500 overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
               >
                 {/* Animated Background Gradient - Dark/Light mode */}
                 <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/0 via-eco-DEFAULT/0 to-eco-DEFAULT/0 group-hover:from-eco-DEFAULT/5 group-hover:via-eco-DEFAULT/3 group-hover:to-eco-DEFAULT/5 dark:group-hover:from-eco-DEFAULT/10 dark:group-hover:via-eco-DEFAULT/5 dark:group-hover:to-eco-DEFAULT/10 transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem]"></div>
                 
                 {/* Decorative Quote Icon */}
                 <motion.div
                   className="absolute top-4 right-4 md:top-6 md:right-6 z-10"
                   initial={{ rotate: 0, scale: 1 }}
                   whileHover={{ rotate: 15, scale: 1.1 }}
                 >
                   <Quote size={36} className="md:w-12 md:h-12 text-eco-accent/20 dark:text-eco-DEFAULT/30 group-hover:text-eco-accent/40 dark:group-hover:text-eco-DEFAULT/50 transition-colors duration-300"/>
                 </motion.div>
                 
                 {/* Sparkle Effect */}
                 <motion.div
                   className="absolute top-3 left-3 md:top-4 md:left-4 z-10"
                   animate={{ 
                     rotate: [0, 360],
                     scale: [1, 1.2, 1]
                   }}
                   transition={{ 
                     duration: 3,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   <Sparkles size={16} className="md:w-5 md:h-5 text-eco-accent/30 dark:text-eco-DEFAULT/40" />
                 </motion.div>
                 
                 {/* Content */}
                 <div className="relative z-10">
                   {/* Stars */}
                   <motion.div 
                     className="flex gap-1 mb-4 md:mb-6"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                   >
                     {[...Array(5)].map((_, i) => (
                       <motion.div
                         key={i}
                         initial={{ scale: 0 }}
                         whileInView={{ scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                         whileHover={{ scale: 1.3, rotate: 15 }}
                       >
                         <Star 
                           size={16} 
                           className="md:w-[18px] md:h-[18px] transition-all duration-300"
                           style={{
                             color: i < item.stars 
                               ? "#fbbf24" 
                               : undefined,
                             fill: i < item.stars 
                               ? "#fbbf24" 
                               : "#d1d5db"
                           }}
                         />
                       </motion.div>
                     ))}
                   </motion.div>

                   {/* Quote Text */}
                   <motion.p 
                     className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg italic leading-relaxed mb-6 md:mb-8 font-medium relative"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                   >
                     <span className="text-3xl md:text-4xl text-eco-accent/30 dark:text-eco-DEFAULT/40 font-serif absolute -left-1 md:-left-2 -top-1 md:-top-2">"</span>
                     <span className="relative z-10 pl-3 md:pl-4">{item.text}</span>
                     <span className="text-3xl md:text-4xl text-eco-accent/30 dark:text-eco-DEFAULT/40 font-serif">"</span>
                   </motion.p>

                   {/* Client Info */}
                   <motion.div 
                     className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-800"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                   >
                     <motion.div 
                       className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-eco-accent dark:border-eco-DEFAULT p-0.5 relative group/avatar flex-shrink-0"
                       whileHover={{ scale: 1.1, rotate: 5 }}
                       transition={{ type: "spring", stiffness: 300 }}
                     >
                       <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/20 to-eco-accent/20 dark:from-eco-DEFAULT/30 dark:to-eco-accent/30 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300"></div>
                       <img 
                         src={item.img} 
                         alt={item.name} 
                         className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                       />
                     </motion.div>
                     <div className="flex-1 min-w-0">
                       <motion.h4 
                         className="font-bold text-eco-dark dark:text-white text-sm sm:text-base md:text-lg mb-1 truncate"
                         whileHover={{ x: 5 }}
                         transition={{ type: "spring", stiffness: 300 }}
                       >
                         {item.name}
                       </motion.h4>
                       <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider flex flex-col">
                         <span className="text-eco-accent dark:text-eco-DEFAULT font-semibold truncate">{item.country}</span>
                         {item.role && (
                           <span className="text-gray-400 dark:text-gray-500 text-[10px] mt-1 line-clamp-1">{item.role}</span>
                         )}
                       </div>
                     </div>
                   </motion.div>
                 </div>
                 
                 {/* Shine Effect on Hover - Dark/Light mode */}
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-[2rem] md:rounded-[2.5rem]"
                   initial={{ x: "-100%" }}
                 />
               </motion.div>
             ))}
           </motion.div>
         </div>
      </div>

    </section>
  );
}