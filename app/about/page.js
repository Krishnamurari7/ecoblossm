"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, History, Factory, Globe, ShieldCheck, Ship, Target, Eye, Compass } from "lucide-react";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import Counter from "@/components/Counter";

// Slider Images
const sliderImages = [
  "/Product1.webp",
  "/Product2.webp",
  "/Product3.webp",
  "/Product4.webp",
  "/Product5.webp",
];



export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const features = [
    "100% NATURAL PRODUCTS",
    "ECO-CONSCIOUS PRACTICES",
    "FARM-TO-GLOBAL SUPPLY",
    "TIMELY DELIVERY",
    "GLOBAL EXPORT EXPERTISE",
    "CUSTOMER-CENTRIC APPROACH"
  ];

  const stats = [
    { value: '200+', label: 'Products Range' },
    { value: '20+', label: 'State Served' },
    { value: '5+', label: 'Years Experience' },
    { value: '1.2k+', label: 'Happy Clients' },
  ];

  return (
    <main className="bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white overflow-hidden">

      {/* 1. HERO HEADER */}
      <section className="pt-32 md:pt-40 pb-16 px-4 text-center max-w-5xl mx-auto relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-eco-DEFAULT rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-eco-accent rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.span 
            className="text-eco-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Corporate Profile
          </motion.span>
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            About <br />
            <motion.span 
              className="italic text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Eco Blossom Creations
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Pioneering sustainable exports from India to the world
          </motion.p>
        </motion.div>
      </section>

      {/* 2. MAIN ABOUT SECTION (Slider + Text) */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* LEFT: AUTO SLIDER */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-eco-light/30 dark:bg-green-900/20 z-0 transform scale-110"></div>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={sliderImages[current]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover z-10"
                alt="Premium Indian botanicals and handicrafts export products showcase - Eco Blossom Creations"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
            <motion.button 
              onClick={prevSlide} 
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-2 md:p-3 rounded-full text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </motion.button>
            <motion.button 
              onClick={nextSlide} 
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-2 md:p-3 rounded-full text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </motion.button>
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {sliderImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div 
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 md:space-y-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                At <strong className="text-eco-dark dark:text-white">Eco Blossom Creations Pvt. Ltd.</strong>, we take pride in offering pure, natural, and ethically sourced FMCG products to customers across the globe. Rooted in India's rich agricultural heritage, our mission is to bring the freshness of nature and the purity of traditional farming practices into every home. With a commitment to quality, sustainability, and innovation, Eco Blossom Creations is emerging as a trusted brand for nutritious, chemical-free, and eco-friendly products.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Eco Blossom Creations is a forward-thinking company dedicated to producing and exporting premium-quality natural powders, organic products, superfoods, and eco-friendly solutions. Our team works closely with local farmers, ensuring that every product we offer is grown responsibly, harvested with care, and processed under strict quality standards. We believe in sustainable agriculture, clean processing, and transparent business practices—values that make us one of the most reliable names in the natural products industry.
              </motion.p>
            </div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-y-4 md:gap-x-8 pt-6 border-t border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="p-1 rounded-full bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check size={16} className="text-green-600 dark:text-green-400" strokeWidth={3} />
                  </motion.div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide group-hover:text-eco-dark dark:group-hover:text-eco-DEFAULT transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. NEW SECTION: MISSION, VISION & OBJECTIVE */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-eco-accent font-bold tracking-widest uppercase text-xs mb-4 block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Core Philosophy
            </motion.span>
            <motion.h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Guiding Principles
            </motion.h2>
            <motion.p 
              className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              The foundational pillars that drive our strategies and define our global identity.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* MISSION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-eco-cream dark:bg-gray-800/50 p-6 md:p-10 rounded-[2rem] text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/0 to-eco-DEFAULT/0 group-hover:from-eco-DEFAULT/5 group-hover:to-transparent transition-all duration-500 rounded-[2rem]"></div>
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 md:mb-8 text-green-600 dark:text-green-400 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Target size={32} className="md:w-10 md:h-10" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 font-bold text-eco-dark dark:text-white relative z-10">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
                Our mission is to inspire sustainable living through eco-friendly, handcrafted products that nurture people and the planet. We are committed to reducing waste, supporting local artisans, and promoting a greener future — one natural creation at a time.
              </p>
            </motion.div>

            {/* VISION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-6 md:p-10 rounded-[2rem] text-center border border-eco-accent/20 shadow-lg relative overflow-hidden group"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-2 bg-eco-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              ></motion.div>
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6 md:mb-8 text-eco-accent relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Eye size={32} className="md:w-10 md:h-10" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 font-bold text-eco-dark dark:text-white relative z-10">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
                Our vision is to create a world where sustainability blooms in every home. We strive to be a global leader in eco-conscious innovation — empowering communities, protecting nature, and inspiring generations to choose a greener, more harmonious way of living.
              </p>
            </motion.div>

            {/* OBJECTIVE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-eco-cream dark:bg-gray-800/50 p-6 md:p-10 rounded-[2rem] text-center border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/0 to-eco-DEFAULT/0 group-hover:from-eco-DEFAULT/5 group-hover:to-transparent transition-all duration-500 rounded-[2rem]"></div>
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 md:mb-8 text-blue-600 dark:text-blue-400 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Compass size={32} className="md:w-10 md:h-10" />
              </motion.div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 font-bold text-eco-dark dark:text-white relative z-10">Our Objective</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
                The objective is to promote eco-friendly living through natural products. We aim to reduce environmental impact, support local artisans, encourage responsible consumption, and spread awareness about the importance of preserving our planet for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS BANNER */}
      <section className="relative py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2600" alt="Global shipping and logistics for Indian botanical exports - Eco Blossom Creations" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.span 
              className="bg-eco-accent text-white px-3 py-1 text-xs font-bold uppercase rounded-sm mb-4 inline-block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            >
              Our Achievement
            </motion.span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We take Pride in delivering nature's finest products to the world.
            </h2>
            <Link href="/contact">
              <motion.button
                className="inline-block bg-eco-accent hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-full font-bold uppercase text-sm transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(132, 204, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-6 md:gap-8 border-l border-white/10 pl-4 md:pl-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                className="space-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
                  <Counter value={stat.value} />
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Testimonials />

      {/* 6. COMPANY HISTORY */}
      {/* <section className="py-24 bg-eco-dark dark:bg-black text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <History size={40} className="mx-auto text-eco-accent mb-4"/>
               <h2 className="font-serif text-4xl">Our Journey</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { year: "2015", title: "Inception", desc: "Started as a small nursery in Nalanda supplying to local markets." },
                 { year: "2018", title: "Expansion", desc: "Expanded to handicraft sourcing from West Bengal artisans." },
                 { year: "2021", title: "Global Wings", desc: "Obtained IEC Code & APEDA membership. First shipment to Dubai." },
                 { year: "2025", title: "Market Leader", desc: "Recognized as a Star Export House with clients in 20+ nations." }
               ].map((milestone, i) => (
                 <div key={i} className="relative border-l border-white/20 pl-8 pb-8 md:pb-0">
                    <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-eco-accent rounded-full"></span>
                    <span className="text-5xl font-serif font-bold text-white/10 absolute top-0 right-4 -z-10">{milestone.year}</span>
                    <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                    <h4 className="text-eco-accent font-bold mb-2">{milestone.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed">{milestone.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section> */}

      {/* 7. CTA BANNER */}
      <section className="py-12 md:py-20 text-center px-4">
        <motion.div 
          className="max-w-3xl mx-auto bg-eco-cream dark:bg-gray-900 border border-eco-dark/10 dark:border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="relative z-10"
          >
            <Factory size={40} className="md:w-12 md:h-12 mx-auto text-eco-accent mb-4 md:mb-6" />
          </motion.div>
          <motion.h2 
            className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Visit Our Facility
          </motion.h2>
          <motion.p 
            className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We welcome international buyers to visit our processing units in Patna.
            Schedule a factory tour with our team.
          </motion.p>
          <Link href="/contact" className="relative z-10">
            <motion.button
              className="bg-eco-dark text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-black transition"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20, 83, 45, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Book a Visit
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}