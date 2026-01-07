"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat({ productDetails }) {
  // 1. Apna WhatsApp Number Yahan Dalein
  const phoneNumber = "919241877276"; 

  // 2. Message Generate Karne ka Logic
  const getWhatsAppUrl = () => {
    let message = "";

    if (productDetails) {
      // === SCENARIO 1: PRODUCT DETAILS HAIN (Product Page) ===
      // Yahan sirf Product ki specific details jayengi
      message = `*New Product Inquiry* 🛒%0a%0a` +
                `I am interested in buying this product:%0a` +
                `--------------------------------%0a` +
                `📦 *Name:* ${productDetails.name}%0a` +
                `🔖 *Category:* ${productDetails.category}%0a` +
                `📊 *MOQ:* ${productDetails.moq}%0a` +
                `--------------------------------%0a%0a` +
                `_Please send me the best price quotation and shipping details for my location._`;
    } else {
      // === SCENARIO 2: PRODUCT DETAILS NAHI HAIN (Home/Contact Page) ===
      // Sirf tabhi General message jayega jab user Home page par hoga
      message = `*Hello Team Eco Blossom,*%0a%0a` +
                `I am visiting your website. I want to know more about your export products and catalog.`;
    }

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <a 
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce-slow flex items-center gap-2 group border-2 border-white"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-[#25D366]" />
      
      {/* Hover Text Change based on Context */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">
        {productDetails ? "Get Quote for this Item" : "Chat with Exporter"}
      </span>
    </a>
  );
}