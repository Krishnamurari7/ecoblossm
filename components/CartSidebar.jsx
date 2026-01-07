"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, MessageCircle, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { cart, removeFromCart, isOpen, setIsOpen } = useCart();

  // --- WHATSAPP LOGIC ---
  const handleWhatsAppInquiry = () => {
    // 1. Apna WhatsApp Number Yahan Daalein (Country code ke saath, bina '+')
    const phoneNumber = "919241877276"; 

    // 2. Message Format Karna
    let message = `*Hello Eco Blossom, I am interested in the following products:* \n\n`;

    const origin = typeof window !== "undefined" ? window.location.origin : "";

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   • MOQ: ${item.moq}\n`;
      message += `   • Category: ${item.category}\n`;
      if (origin) {
        message += `   • Link: ${origin}/product/${item.id}\n\n`;
      }
    });

    message += `_Please provide me with the best quotation and availability details._`;

    // 3. WhatsApp URL Open Karna
    if (typeof window !== "undefined") {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Click to close) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-950 z-[70] shadow-2xl flex flex-col border-l border-gray-200 dark:border-gray-800"
          >
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-eco-cream dark:bg-gray-900">
              <h2 className="text-xl font-serif font-bold text-eco-dark dark:text-white flex items-center gap-2">
                <Send size={20} className="text-eco-DEFAULT"/> Your Inquiry List
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500"/>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                   <MessageCircle size={64} className="mb-4 text-gray-300"/>
                   <p className="text-lg font-bold">Your list is empty.</p>
                   <p className="text-sm">Browse our catalog to add products.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-bold text-eco-dark dark:text-white line-clamp-1">{item.name}</h3>
                       <p className="text-xs text-eco-DEFAULT font-bold uppercase tracking-wider mb-2">{item.category}</p>
                       <p className="text-xs text-gray-500">MOQ: {item.moq}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors self-start"
                    >
                      <Trash2 size={18}/>
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-gray-500 uppercase">Total Items</span>
                  <span className="text-xl font-bold text-eco-dark dark:text-white">{cart.length} Products</span>
               </div>
               
               <button
                 onClick={handleWhatsAppInquiry}
                 disabled={cart.length === 0}
                 className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 <MessageCircle size={24} fill="white" className="text-white"/>
                 Send Inquiry via WhatsApp
               </button>
               
               <p className="text-center text-[10px] text-gray-400 mt-3">
                 Clicking this will open WhatsApp with your product list pre-filled.
               </p>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}