"use client";

import { useRef, useEffect, useState } from "react"; // Added useState
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
// Added ChevronLeft, ChevronRight, Check to imports
import { ArrowRight, Globe, Leaf, Truck, FileText, ArrowUpRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { products } from "@/app/data";
import Testimonials from "@/components/Testimonials";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for text
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // --- 1. FIXED: Added State for Slider ---
  const [current, setCurrent] = useState(0);

  // --- 2. FIXED: Added Features Data ---
  const features = [
    "100% Organic & Natural",
    "Ethically Sourced",
    "Global Safety Standards",
    "Sustainable Packaging"
  ];

  // --- ANIMATION VARIANTS ---
  const scrollContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Cards pop up one by one
    },
  };

  const sliderImages = [
    "/Product1.webp",
    "/Product2.webp",
    "/Product3.webp",
    "/Product4.webp",
    "/Product5.webp",
  ];

  const scrollItem = {
    hidden: { opacity: 0, y: 50 }, // Start slightly down
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  // Website Structured Data for Home Page
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eco Blossom Creations",
    "url": "https://ecoblossomcreations.com",
    "description": "Premier exporter of Indian botanicals, handicrafts, and agro-products. ISO 9001:2015 certified.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ecoblossomcreations.com/shop?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white relative overflow-x-hidden">
      <StructuredData data={websiteSchema} />

      {/* 1. HERO SECTION: Global Trade Vibe */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-200 dark:bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2600"
            alt="Global Logistics"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mt-10 bg-slate-50 rounded-3xl bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-60 py-10 shadow-lg">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block py-1 px-4 border border-eco-dark/50 dark:border-white/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md"
          >
            ISO 9001:2015 Certified Exporter
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-8xl leading-[0.9] mb-6"
          >
            Bridging Nature <br />{" "}
            <span className="italic text-eco-accent">Across Borders.</span>
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
            Premier exporter of Indian botanicals, handicrafts, and
            agro-products. Connecting Indian artisans to global markets.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/shop"
              className="bg-eco-dark dark:bg-white text-white dark:text-eco-dark px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center gap-2 justify-center"
            >
              View Catalog <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="border border-eco-dark dark:border-white px-8 py-4 rounded-full text-lg font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <motion.div 
        className="py-6 bg-eco-dark dark:bg-white overflow-hidden border-y border-white/10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap text-eco-cream dark:text-eco-dark font-serif text-4xl italic opacity-80"
        >
          {Array(6)
            .fill(" IMPORT • EXPORT • LOGISTICS • WHOLESALE • GLOBAL •")
            .map((text, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.1, color: "#84cc16" }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.span>
            ))}
        </motion.div>
      </motion.div>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: AUTO SLIDER */}
          <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 group">
            <div className="absolute inset-0 bg-eco-light/30 dark:bg-green-900/20 z-0 transform scale-110"></div>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={sliderImages[current]}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover z-10"
                alt={`Premium Indian botanicals and handicrafts export products - ${products[current % products.length]?.name || 'Product showcase'}`}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20"></div>
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-3 rounded-full text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 p-3 rounded-full text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {sliderImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index === current ? "bg-white w-8" : "bg-white/50 w-2"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                At <strong className="text-eco-dark dark:text-white">Eco Blossom Creations Pvt. Ltd.</strong>, we take pride in offering pure, natural, and ethically sourced FMCG products to customers across the globe. Rooted in India’s rich agricultural heritage, our mission is to bring the freshness of nature and the purity of traditional farming practices into every home. With a commitment to quality, sustainability, and innovation, Eco Blossom Creations is emerging as a trusted brand for nutritious, chemical-free, and eco-friendly products.
              </p>
              <p>
                Eco Blossom Creations is a forward-thinking company dedicated to producing and exporting premium-quality natural powders, organic products, superfoods, and eco-friendly solutions. Our team works closely with local farmers, ensuring that every product we offer is grown responsibly, harvested with care, and processed under strict quality standards. We believe in sustainable agriculture, clean processing, and transparent business practices—values that make us one of the most reliable names in the natural products industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-green-100 dark:bg-green-900/30">
                    <Check
                      size={16}
                      className="text-green-600 dark:text-green-400"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* 3. WHY CHOOSE US */}
      <section className="py-20 px-4 max-w-7xl mx-auto dark:bg-gray-950 transition-colors duration-300">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={scrollContainer}
      >
        {[
          {
            icon: Leaf,
            title: "100% Natural Products",
            desc: "100% Natural Products — pure, chemical-free, eco-friendly, and crafted for your healthy, natural lifestyle.",
          },
          {
            icon: Globe,
            title: "Farm-To-Global Supply",
            desc: "Farm-To-Global Supply ensures fresh, quality products delivered sustainably worldwide.",
          },
          {
            icon: Truck,
            title: "Timely Delivery",
            desc: "We ensure Timely Delivery — fast, reliable, and on schedule, bringing your products right when you need them.",
          },
        ].map((feat, i) => (
          <motion.div
            key={i}
            variants={scrollItem}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            // Card Hover: Light me White background, Dark me Gray-900 background
            className="group flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 
            hover:bg-white dark:hover:bg-gray-900 
            hover:shadow-xl cursor-pointer 
            border border-transparent hover:border-green-50 dark:hover:border-green-900/30 relative overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-eco-DEFAULT/0 to-eco-DEFAULT/0 group-hover:from-eco-DEFAULT/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>
            
            {/* Icon: Light me Dark Green, Dark me Bright Green (taki dikhe) */}
            <motion.div 
              className="flex-shrink-0 relative z-10"
              whileHover={{ 
                rotate: 360,
                scale: 1.15,
              }}
              transition={{ 
                rotate: { duration: 0.6 },
                scale: { type: "spring", stiffness: 300 }
              }}
            >
              <feat.icon size={48} className="text-green-700 dark:text-green-400" />
            </motion.div>

            {/* Text Section */}
            <div className="relative z-10">
              {/* Title: Light me Black, Dark me White */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors">
                {feat.title}
              </h3>
              
              {/* Description: Light me Gray, Dark me Light Gray */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

      {/* 4. OUR PRODUCT PORTFOLIO (MODERN & ANIMATED) */}
      <section className="py-24 px-4 max-w-7xl mx-auto dark:bg-gray-950 overflow-hidden">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-eco-accent font-bold uppercase tracking-widest text-xs mb-3 block">
            Global Trade
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-eco-dark dark:text-white mb-4">
            Our Product Portfolio
          </h2>
          <div className="h-1 w-24 bg-eco-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={scrollContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto"
        >
          {products.slice(0, 3).map((item) => (
            <motion.div key={item.id} variants={scrollItem} className="h-full">
              <Link
                href={`/product/${item.id}`}
                className="block relative group h-[500px] w-full overflow-hidden rounded-[2.5rem] shadow-lg cursor-pointer"
              >
                {/* Image Zoom Effect */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Content - Slides Up */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Glass Effect Box */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex items-center justify-between">
                    <div>
                      <span className="text-eco-accent text-xs font-bold uppercase tracking-widest mb-1 block">
                        Export Ready
                      </span>
                      <h3 className="text-2xl font-serif text-white leading-none">
                        {item.name}
                      </h3>
                    </div>

                    {/* Animated Arrow Icon */}
                    <div className="w-12 h-12 rounded-full bg-white text-eco-dark flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shadow-md">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border border-eco-dark dark:border-white px-8 py-3 rounded-full font-bold hover:bg-eco-dark hover:text-white dark:hover:bg-white dark:hover:text-eco-dark transition-all"
          >
            View Full Catalog <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. LOGISTICS PROCESS */}
      <section className="bg-eco-dark dark:bg-black text-white py-24 rounded-t-[3rem] relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <span className="text-eco-accent uppercase tracking-widest font-bold text-xs mb-4 block">
              Supply Chain
            </span>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">
              Seamless <br />
              Logistics.
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              From farm to freight, we manage the entire supply chain to ensure
              timely delivery and product integrity.
            </p>
          </div>
          <div className="space-y-12">
            {[
              {
                title: "1. Sourcing & Quality Check",
                desc: "Procurement from certified organic farms.",
              },
              {
                title: "2. Processing & Packaging",
                desc: "Grading, sorting, and export-compliant packaging.",
              },
              {
                title: "3. Documentation",
                desc: "Handling Customs, Phytosanitary, and BL documentation.",
              },
              {
                title: "4. Global Shipping",
                desc: "Air & Sea freight partnerships with DHL, Maersk, etc.",
              },
            ].map((step, i) => (
              <div key={i} className="border-l-2 border-eco-accent pl-8 py-2">
                <h3 className="text-2xl font-serif mb-2">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ABOUT US WITH VIDEO */}

      <section className="py-24 px-4 max-w-7xl mx-auto dark:bg-gray-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-eco-DEFAULT font-bold uppercase tracking-widest text-sm block">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-eco-dark dark:text-white leading-tight">
              Experience the True <br />
              with Eco Blossom <br />
              Creations Pvt. Ltd
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
              At Eco Blossom Creations Pvt. Ltd., we believe in blending nature,
              innovation, and sustainability to deliver products that nurture
              both people and the planet. Our commitment to quality,
              authenticity, and eco-friendly practices makes us a trusted name in
              the natural and organic product industry.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-eco-DEFAULT hover:bg-eco-accent hover:text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[220px] md:h-[337px] w-full bg-black rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1jRjzVR_y2o?autoplay=1&mute=1&loop=1&playlist=1jRjzVR_y2o&controls=0&showinfo=0&rel=0"
              title="Eco Blossom Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 pointer-events-none"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-eco-accent font-bold uppercase tracking-widest text-xs mb-3 block">
              Global Markets
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Connecting Indian botanicals and agro-products to diverse global industries
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Food & Beverage Manufacturing",
                desc: "Premium spices, powders, and superfoods for food processing industries",
                img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop&q=80",
              },
              {
                title: "Health & Wellness Brands",
                desc: "Organic superfoods like Moringa, Makhana, and Millet for nutraceutical companies",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80",
              },
              {
                title: "Organic Retail Chains",
                desc: "Certified organic products for supermarkets and specialty organic stores",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
              },
              {
                title: "Agricultural & Bio-Fuel",
                desc: "Cow manure, sawdust, and organic fertilizers for sustainable agriculture",
                img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80",
              },
            ].map((ind, i) => (
              <motion.div 
                key={i} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 rounded-2xl overflow-hidden mb-4 relative bg-gray-200 dark:bg-gray-800 shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={ind.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    alt={`${ind.title} - ${ind.desc}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                      {ind.desc}
                    </p>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-serif text-center group-hover:text-eco-accent transition-colors">
                  {ind.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. CTA */}
      <motion.section 
        className="py-24 bg-white dark:bg-gray-900 text-center px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <FileText size={48} className="mx-auto text-eco-accent mb-6" />
        </motion.div>
        <motion.h2 
          className="text-4xl font-serif mb-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Ready to Import?
        </motion.h2>
        <motion.p 
          className="text-gray-500 mb-8 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Request our latest catalog and price list for this season.
        </motion.p>
        <Link href="/contact">
          <motion.button
            className="bg-eco-dark text-white px-10 py-4 rounded-full font-bold hover:bg-green-900 transition relative z-10"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 83, 45, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Request Quotation
          </motion.button>
        </Link>
      </motion.section>
    </main>
  );
}