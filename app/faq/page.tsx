'use client';

import React, { useState } from 'react';

// Sample Data (Yahan aap apna data edit kar sakte hain)
const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping usually takes 5-7 business days. Express shipping is available and takes 2-3 business days depending on your location."
  },
  {
    question: "What is your return policy?",
    answer: "We aim to make sure our customers love our products. You can return items within 30 days of receipt if they are in original condition."
  },
  {
    question: "Can I change my order details?",
    answer: "If your order hasn't been shipped yet, please contact our support team immediately via email, and we will do our best to assist you."
  }
];

export default function FAQPage() {
  // State to track which FAQ is open (null means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans pt-24">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Header Section with Logo --- */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            {/* Logo Placeholder (Replace SVG with your <img src='/logo.png' />) */}
           
            {/* <span className="text-xl font-bold text-gray-800 tracking-tight uppercase">
              Tasty Foods Delights
            </span> */}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-600">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Find answers to our most common questions below.
          </p>
        </div>

        {/* --- FAQ List Section --- */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`
                  group border rounded-2xl bg-white overflow-hidden transition-all duration-300
                  ${isOpen ? 'border-lime-500 shadow-lg shadow-lime-100' : 'border-gray-200 hover:border-lime-300 hover:shadow-md'}
                `}
              >
                {/* Question Header (Button) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-lime-700' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Animated Icon */}
                  <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-lime-100 text-lime-600 rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-lime-50 group-hover:text-lime-500'}`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      {/* Show Minus if open, Plus if closed */}
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </span>
                </button>

                {/* Answer Content (Animated Height) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                >
                  <div className="overflow-hidden px-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Footer Contact Link --- */}
        <div className="text-center mt-12 text-gray-500">
          Didn't find what you're looking for?{' '}
          <a href="/contact" className="text-lime-600 font-semibold hover:underline hover:text-lime-700">
            Contact our support
          </a>
        </div>

      </div>
    </div>
  );
}