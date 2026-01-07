"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X, Leaf, ChevronRight } from "lucide-react"; // Globe ki jagah Leaf use kiya
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { setIsOpen, cart } = useCart();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "Company", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b bg-[#f7fee7]/95 dark:bg-[#052e16]/95 backdrop-blur-xl shadow-sm py-3 border-eco-DEFAULT/20 ${
          scrolled ? "shadow-2xl bg-[#f7fee7]/98 dark:bg-[#052e16]/98 py-2" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO - Updated with Brand Colors */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-eco-DEFAULT text-white p-1.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
               <img src="/logo.webp" alt="Eco Blossom Creations Logo - Premium Indian Botanicals Exporter" className="w-40 transition-transform duration-300"/>
            </motion.div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  href={link.href} 
                  className={`text-xs font-bold uppercase tracking-widest relative group transition-all duration-300 ${
                    pathname === link.href 
                      ? "text-eco-DEFAULT" 
                      : "text-gray-600 dark:text-gray-300 hover:text-eco-dark dark:hover:text-eco-light"
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    {link.name}
                  </motion.span>
                  <motion.span 
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full bg-eco-DEFAULT ${
                      pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: pathname === link.href ? 32 : 0 }}
                    whileHover={{ width: 32 }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 z-50">
            <div className="hidden sm:block"><ThemeToggle /></div>
            

            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-eco-dark dark:text-white focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-40 w-80 bg-eco-cream dark:bg-[#022c22] pt-24 px-6 md:hidden flex flex-col shadow-2xl"
            >
             <motion.div 
               className="flex flex-col space-y-6"
               initial="closed"
               animate="open"
             >
                {navLinks.filter(link => link.name !== "Blog").map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between items-center text-2xl font-serif text-eco-dark dark:text-white border-b border-eco-DEFAULT/20 pb-4 hover:text-eco-DEFAULT transition-colors group"
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {link.name}
                      </motion.span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ChevronRight size={20} className="text-eco-DEFAULT"/>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
             </motion.div>
             <motion.div 
               className="mt-8 flex justify-between items-center bg-white/50 dark:bg-black/20 p-4 rounded-xl backdrop-blur-md"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
             >
                <ThemeToggle />
             </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}