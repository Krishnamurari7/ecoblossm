"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Container, FileText, Download, CheckCircle, Ship, Package, ShieldCheck, ThumbsUp, ThumbsDown, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductClient({ product }) {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("specifications");

  if (!product) return <div className="text-center pt-40">Product not found</div>;

  return (
    <main className="pt-28 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
           <div className="h-[400px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-800 relative group">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-eco-dark text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                 Export Grade A
              </div>
           </div>
           
           <div className="flex flex-wrap gap-3 justify-center">
              {["ISO 9001", "GMP Certified", "Phytosanitary", "Organic"].map((badge) => (
                 <div key={badge} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-bold uppercase text-gray-500">
                    <ShieldCheck size={14} className="text-eco-accent"/> {badge}
                 </div>
              ))}
           </div>

           {product.benefits && (
             <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 mt-6">
                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                   <Star className="text-yellow-400 fill-yellow-400" size={20}/> Key Benefits
                </h3>
                <ul className="space-y-3">
                   {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                         <CheckCircle size={16} className="text-eco-accent mt-0.5 flex-shrink-0"/>
                         <span>{benefit}</span>
                      </li>
                   ))}
                </ul>
             </div>
           )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="sticky top-32 h-fit"
        >
          <div className="flex justify-between items-start mb-4">
             <span className="bg-eco-accent/20 text-eco-accent px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">{product.category}</span>
             <span className="flex items-center gap-1 text-green-600 font-bold text-xs uppercase tracking-wide border border-green-200 px-2 py-1 rounded-full bg-green-50 dark:bg-green-900/20"><CheckCircle size={14}/> Available for Export</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">{product.name}</h1>
          
          {product.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>
          )}
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl mb-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-eco-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="flex gap-4 relative z-10 mt-6">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-eco-dark dark:bg-white dark:text-eco-dark text-white rounded-xl py-4 font-bold hover:opacity-90 transition shadow-lg flex justify-center items-center gap-2 text-sm uppercase tracking-wide"
                >
                  <FileText size={18}/> Add to Inquiry List
                </button>
                <button className="px-5 py-4 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-500 dark:text-gray-400" title="Download TDS">
                   <Download size={20}/>
                </button>
             </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900">
             <div className="flex border-b border-gray-200 dark:border-gray-800">
                {['Specifications', 'Logistics', 'Analysis'].map(tab => (
                   <button 
                     key={tab} 
                     onClick={() => setActiveTab(tab.toLowerCase())}
                     className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === tab.toLowerCase() ? 'bg-eco-cream/50 dark:bg-gray-800 text-eco-dark dark:text-white border-b-2 border-eco-accent' : 'text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'}`}
                   >
                     {tab}
                   </button>
                ))}
             </div>
             
             <div className="p-6 h-auto max-h-80 overflow-y-auto custom-scrollbar">
                {activeTab === 'specifications' && (
                   <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between border-b border-dashed border-gray-200 dark:border-gray-800 pb-2"><span className="text-gray-500">Shelf Life</span> <span className="font-medium">Transit Optimized</span></div>
                      <div className="flex justify-between border-b border-dashed border-gray-200 dark:border-gray-800 pb-2"><span className="text-gray-500">Certificates</span> <span className="font-medium">Phytosanitary</span></div>
                      {product.specs?.shape && (
                        <div className="flex justify-between border-b border-dashed border-gray-200 dark:border-gray-800 pb-2"><span className="text-gray-500">Shape</span> <span className="font-medium">{product.specs.shape}</span></div>
                      )}
                   </div>
                )}
                
                {activeTab === 'logistics' && (
                   <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-start gap-3">
                         <Container size={18} className="text-eco-accent mt-1"/>
                         <div>
                            <strong className="block text-eco-dark dark:text-white">Container Load</strong>
                            Standard FCL/LCL Options available.
                         </div>
                      </div>
                      <div className="flex items-start gap-3">
                         <Ship size={18} className="text-eco-accent mt-1"/>
                         <div>
                            <strong className="block text-eco-dark dark:text-white">Lead Time</strong>
                            10-14 Days post LC/Advance confirmation.
                         </div>
                      </div>
                      <div className="flex items-start gap-3">
                         <Package size={18} className="text-eco-accent mt-1"/>
                         <div>
                            <strong className="block text-eco-dark dark:text-white">Samples</strong>
                            Available via DHL Express (Freight on Buyer).
                         </div>
                      </div>
                   </div>
                )}

                {activeTab === 'analysis' && (
                   <div className="grid grid-cols-1 gap-6">
                      {product.pros && (
                        <div>
                           <h4 className="flex items-center gap-2 font-bold text-green-600 mb-3 uppercase text-xs tracking-widest">
                              <ThumbsUp size={14}/> Advantages (Pros)
                           </h4>
                           <ul className="space-y-2">
                              {product.pros.map((pro, i) => (
                                 <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="text-green-500">•</span> {pro}
                                 </li>
                              ))}
                           </ul>
                        </div>
                      )}

                      {product.cons && (
                        <div>
                           <h4 className="flex items-center gap-2 font-bold text-red-500 mb-3 uppercase text-xs tracking-widest">
                              <ThumbsDown size={14}/> Considerations (Cons)
                           </h4>
                           <ul className="space-y-2">
                              {product.cons.map((con, i) => (
                                 <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="text-red-400">•</span> {con}
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