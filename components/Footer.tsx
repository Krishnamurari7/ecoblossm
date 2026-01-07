"use client";
import Link from "next/link";
import { Leaf, Instagram, Facebook, Twitter, Linkedin, ShieldCheck, Youtube } from "lucide-react";
import { products } from "../app/data";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#052e16] dark:bg-black text-white pt-24 pb-10 overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]"
        animate={{ 
          x: [0, -100, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <h1 className="text-[10vw] font-serif font-bold whitespace-nowrap text-center leading-none text-eco-light">
          ECO BLOSSOM CREATIONS
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <motion.div 
            className="md:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
               <motion.img 
                 src="/logo.webp" 
                 alt="Eco Blossom Creations Logo - Premium Indian Botanicals Exporter" 
                 className="w-38 h-30"
                 whileHover={{ scale: 1.05 }}
                 transition={{ type: "spring", stiffness: 300 }}
               />
            </Link>
            <p className="text-eco-light/60 text-sm leading-relaxed">
              At Eco Blossom Creations, we take pride in delivering nature's finest products to the world. As a trusted exporter of premium FMCG goods, we are dedicated to promoting a healthier and more sustainable lifestyle through quality, purity and innovation.
            </p>
            <div className="flex gap-3">
               {[
                 { Icon: Youtube, url: "https://www.youtube.com/@EcoBlossomCreation" },
                 { Icon: Twitter, url: "https://x.com/EcoBlossomc" },
                 { Icon: Facebook, url: "https://www.facebook.com/EcoBlossomCreation/" },
                 { Icon: Instagram, url: "https://www.instagram.com/ecoblossomcreation/" }
               ].map((social, i) => (
                 <motion.a 
                   key={i} 
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-eco-DEFAULT hover:border-eco-DEFAULT transition-all backdrop-blur-sm"
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   whileTap={{ scale: 0.9 }}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   aria-label={`Visit our ${social.Icon.name} page`}
                 >
                    <social.Icon size={16}/>
                 </motion.a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
             <h4 className="font-bold text-eco-DEFAULT mb-6 uppercase text-xs tracking-widest">Company</h4>
             <ul className="space-y-3 text-sm text-eco-light/70">
                {['About', 'Quality Assurance', 'Services'].map((item, i) => (
                   <motion.li 
                     key={item}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                   >
                     <Link 
                       href={`/${item.split(' ')[0].toLowerCase()}`} 
                       className="hover:text-white transition-all inline-block group"
                     >
                       <motion.span
                         whileHover={{ x: 5 }}
                         className="flex items-center gap-2"
                       >
                         <span className="w-0 group-hover:w-2 h-0.5 bg-eco-DEFAULT transition-all duration-300"></span>
                         {item}
                       </motion.span>
                     </Link>
                   </motion.li>
                ))}
             </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <h4 className="font-bold text-eco-DEFAULT mb-6 uppercase text-xs tracking-widest">Products</h4>
             <ul className="space-y-3 text-sm text-eco-light/70">
                {products.map((item, i) => (
                   <motion.li 
                     key={item.name}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                   >
                     <Link 
                       href={`/product/${item.id}`} 
                       className="hover:text-white transition-all inline-block group"
                     >
                       <motion.span
                         whileHover={{ x: 5 }}
                         className="flex items-center gap-2"
                       >
                         <span className="w-0 group-hover:w-2 h-0.5 bg-eco-DEFAULT transition-all duration-300"></span>
                         {item.name}
                       </motion.span>
                     </Link>
                   </motion.li>
                ))}
             </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
             <h4 className="font-bold text-eco-DEFAULT mb-6 uppercase text-xs tracking-widest">Contact</h4>
             <address className="text-sm text-eco-light/70 not-italic space-y-2">
                <motion.p
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  City plaza, Kidwaipuri,
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Patna, Bihar 800001, India
                </motion.p>
                <p className="mt-4"><strong className="text-white">Registration No:</strong> 20426001000040</p>
                <motion.p
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <strong className="text-white">Email:</strong> info@ecoblossomcreations.com
                </motion.p>
             </address>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
           <motion.p 
             className="text-xs text-white/40"
             whileHover={{ scale: 1.05 }}
           >
             &copy; {currentYear} Eco Blossom Creations. All rights reserved.
           </motion.p>
           
        </motion.div>
      </div>
    </footer>
  );
}