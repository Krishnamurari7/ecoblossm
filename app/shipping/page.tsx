"use client"; // Next.js 13+ app directory ke liye

import React from 'react';
import Image from 'next/image'; // Next.js image component
import { motion } from 'framer-motion'; // Animation ke liye
import { Truck, RotateCcw, Clock, ShieldCheck, Mail } from 'lucide-react'; // Modern Icons

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* Header Section with Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        {/* <div className="relative w-48 h-24 mx-auto mb-6 drop-shadow-lg">
           <img 
             src="/Untitled-160-x-133-px-160-x-55-px.webp" 
             alt="International shipping and logistics services for botanical exports" 
             className="w-full h-full object-contain"
           />
        </div> */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 tracking-tight">
          Shipping & <span className="text-lime-600">Returns</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are committed to delivering fresh, organic delights to your doorstep with transparency and care.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
      >
        
        {/* Shipping Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Decorative Background Circle */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-green-100 rounded-full opacity-50 blur-2xl group-hover:bg-green-200 transition-colors"></div>

          <div className="flex items-center mb-6 relative z-10">
            <div className="bg-green-100 text-green-700 p-3 rounded-2xl mr-4 shadow-sm">
              <Truck size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Shipping Policy</h2>
          </div>

          <div className="space-y-6 text-gray-600 relative z-10">
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <strong className="block text-gray-900">Processing Time</strong>
                <p className="text-sm">Orders processed within 1-2 business days (excluding weekends/holidays).</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
              <strong className="block text-green-900 mb-2">Delivery Estimates</strong>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Domestic: <span className="font-semibold ml-1">3-5 business days</span>
                </li>
                {/* <li className="flex items-center">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mr-2"></span>
                  International: <span className="font-semibold ml-1">7-21 business days</span>
                </li> */}
              </ul>
            </div>
            
            <p className="text-sm italic text-gray-500">
              *Shipping rates are calculated at checkout based on weight and location.
            </p>
          </div>
        </motion.div>

        {/* Returns Card */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
           {/* Decorative Background Circle */}
           <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-lime-100 rounded-full opacity-50 blur-2xl group-hover:bg-lime-200 transition-colors"></div>

          <div className="flex items-center mb-6 relative z-10">
            <div className="bg-lime-100 text-lime-700 p-3 rounded-2xl mr-4 shadow-sm">
              <RotateCcw size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Return Policy</h2>
          </div>

          <div className="space-y-6 text-gray-600 relative z-10">
            <div className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-lime-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <strong className="block text-gray-900">30-Day Guarantee</strong>
                <p className="text-sm">We accept returns up to 30 days after delivery if the item is unused and in original packaging.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-lime-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <strong className="block text-gray-900">Damaged Items?</strong>
                <p className="text-sm">
                  Please email us immediately at <a href="mailto:support@tastyfoods.com" className="text-green-600 font-medium hover:underline">support@tastyfoods.com</a> with photos.
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl text-center">
              <p className="text-sm text-gray-600">
                Refunds processed within <span className="font-bold text-gray-900">5-7 business days</span> of receipt.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}