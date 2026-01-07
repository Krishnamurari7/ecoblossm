"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Container, FileText, Download, CheckCircle, Ship, Package, ShieldCheck, ThumbsUp, ThumbsDown, Star, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductClient({ product }) {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("specifications");

  // Safety check: Agar product data load nahi hua to error na aaye
  if (!product) return <div className="text-center pt-40 text-xl font-bold text-gray-400">Loading Product Details...</div>;

  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* ================= LEFT COLUMN: IMAGES & BENEFITS ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
           {/* Main Image Card */}
           <div className="h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 relative group">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-eco-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/20">
                 Export Grade A
              </div>
           </div>
           
           {/* Certification Badges */}
           <div className="flex flex-wrap gap-3 justify-center">
              {["ISO 9001", "GMP Certified", "Phytosanitary", "Organic"].map((badge) => (
                 <div key={badge} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-xs font-bold uppercase text-gray-500 shadow-sm">
                    <ShieldCheck size={14} className="text-eco-accent"/> {badge}
                 </div>
              ))}
           </div>

           {/* KEY BENEFITS SECTION (Always Visible) */}
           {product.benefits && product.benefits.length > 0 && (
             <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-lg">
                <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2 text-eco-dark dark:text-white">
                   <Star className="text-yellow-400 fill-yellow-400" size={22}/> Why Choose This?
                </h3>
                <ul className="space-y-4">
                   {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-gray-600 dark:text-gray-300">
                         <div className="mt-0.5 bg-eco-light/30 p-1 rounded-full text-eco-accent">
                             <CheckCircle size={14} strokeWidth={3}/>
                         </div>
                         <span className="leading-relaxed">{benefit}</span>
                      </li>
                   ))}
                </ul>
             </div>
           )}
        </motion.div>

        {/* ================= RIGHT COLUMN: DETAILS & ACTIONS ================= */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:sticky lg:top-32 h-fit"
        >
          {/* Breadcrumb / Category Tag */}
          <div className="flex justify-between items-center mb-6">
             <span className="bg-eco-accent text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
             <span className="flex items-center gap-2 text-green-600 font-bold text-[10px] uppercase tracking-wide bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full border border-green-200 dark:border-green-900">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available for Export
             </span>
          </div>
          
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-eco-dark dark:text-white">{product.name}</h1>
          
          {/* FULL DESCRIPTION (Details Page) */}
          {product.description && (
            <div className="prose prose-sm dark:prose-invert text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              <p>{product.description}</p>
            </div>
          )}
          
          <div className="bg-eco-dark dark:bg-gray-800 text-white p-8 rounded-3xl shadow-xl mb-10 relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-eco-accent/20 rounded-full blur-3xl"></div>
             
             <div className="flex gap-4 relative z-10 mt-6">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-white text-eco-dark rounded-xl py-4 font-bold hover:bg-gray-100 transition shadow-lg flex justify-center items-center gap-2 text-sm uppercase tracking-wide"
                >
                  <FileText size={18}/> Add to Inquiry List
                </button>
                {/* <button className="px-5 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition text-white" title="Download TDS">
                   <Download size={20}/>
                </button> */}
             </div>
          </div>

          {/* TABS: SPECS, LOGISTICS, PROS/CONS */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
             <div className="flex border-b border-gray-200 dark:border-gray-800">
                {['Specifications', 'Logistics', 'Analysis'].map(tab => (
                   <button 
                     key={tab} 
                     onClick={() => setActiveTab(tab.toLowerCase())}
                     className={`flex-1 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all ${
                        activeTab === tab.toLowerCase() 
                        ? 'bg-eco-cream dark:bg-gray-800 text-eco-dark dark:text-white border-b-2 border-eco-accent' 
                        : 'text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-600'
                     }`}
                   >
                     {tab}
                   </button>
                ))}
             </div>
             
             <div className="p-6 md:p-8 h-auto max-h-[400px] overflow-y-auto custom-scrollbar">
                
                {/* 1. SPECIFICATIONS CONTENT */}
                {activeTab === 'specifications' && (
                   <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                      <SpecRow label="Shelf Life" value="Transit Optimized" />
                      <SpecRow label="Moisture" value="< 12% (Standard)" />
                      <SpecRow label="Purity" value="99.5% Min" />
                   </div>
                )}
                
                {/* 2. LOGISTICS CONTENT */}
                {activeTab === 'logistics' && (
                   <div className="space-y-6 text-sm">
                      <LogisticsRow 
                        icon={Container} 
                        title="Container Load" 
                        desc="20ft / 40ft FCL available. LCL options for trial orders."
                      />
                      <LogisticsRow 
                        icon={Ship} 
                        title="Shipping Terms" 
                        desc="FOB, CIF, Ex-Works available. We handle all customs documentation."
                      />
                      <LogisticsRow 
                        icon={Package} 
                        title="Sample Policy" 
                        desc="Paid samples available via DHL Express (cost adjusted in first commercial order)."
                      />
                   </div>
                )}

                {/* 3. ANALYSIS CONTENT (PROS & CONS) */}
                {activeTab === 'analysis' && (
                   <div className="space-y-8">
                      {/* PROS */}
                      {product.pros && product.pros.length > 0 && (
                        <div>
                           <h4 className="flex items-center gap-2 font-bold text-green-600 mb-4 uppercase text-xs tracking-widest border-b border-gray-100 dark:border-gray-800 pb-2">
                              <ThumbsUp size={16}/> Advantages
                           </h4>
                           <ul className="grid grid-cols-1 gap-3">
                              {product.pros.map((pro, i) => (
                                 <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5"/> 
                                    <span>{pro}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                      )}

                      {/* CONS */}
                      {product.cons && product.cons.length > 0 && (
                        <div>
                           <h4 className="flex items-center gap-2 font-bold text-orange-500 mb-4 uppercase text-xs tracking-widest border-b border-gray-100 dark:border-gray-800 pb-2">
                              <Info size={16}/> Considerations
                           </h4>
                           <ul className="grid grid-cols-1 gap-3">
                              {product.cons.map((con, i) => (
                                 <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 bg-orange-50 dark:bg-orange-900/10 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30">
                                    <span className="text-orange-400 font-bold">•</span>
                                    <span>{con}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                      )}
                   </div>
                )}

             </div>
          </div>

        </motion.div>
      </div>
    </main>
  );
}

// Helper Components for cleaner code
function SpecRow({ label, value }) {
   return (
      <div className="flex flex-col border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
         <span className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">{label}</span>
         <span className="font-medium text-eco-dark dark:text-white">{value || "N/A"}</span>
      </div>
   );
}

function LogisticsRow({ icon: Icon, title, desc }) {
   return (
      <div className="flex gap-4">
         <div className="w-10 h-10 rounded-full bg-eco-light/30 flex items-center justify-center text-eco-dark dark:text-eco-light flex-shrink-0">
            <Icon size={20} />
         </div>
         <div>
            <h4 className="font-bold text-eco-dark dark:text-white mb-1">{title}</h4>
            <p className="text-gray-500 leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}