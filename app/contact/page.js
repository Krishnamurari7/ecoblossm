"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Clock, MessageSquare, Plus, Minus, Building2, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    destination: "",
    incoterms: "",
    productRequirements: "",
  });

  const faqs = [
    { q: "Do you provide Phytosanitary Certificates?", a: "Yes, all our plant and botanical shipments come with Phytosanitary certificates issued by the Plant Quarantine Organization of India." },
    { q: "What are your Payment Terms?", a: "We accept Irrevocable LC (Letter of Credit) at sight for orders above ₹8,00,000. For smaller orders, we work on 50% Advance & 50% against BL Copy (TT)." },
    { q: "Can you handle DDP (Door Delivery)?", a: "Yes, we have partnerships with DHL & FedEx for DDP shipments to all countries." },
    { q: "What is your Sample Policy?", a: "We provide samples on a freight-collect basis. The sample cost is deducted from your first commercial invoice." }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone || !formData.productRequirements) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "RFQ submitted successfully! We will contact you within 24 hours.");
        // Reset form
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          destination: "",
          incoterms: "",
          productRequirements: "",
        });
      } else {
        toast.error(data.error || "Failed to submit RFQ. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-eco-cream dark:bg-gray-950 overflow-hidden text-eco-dark dark:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="pt-32 pb-16 text-center px-4 max-w-4xl mx-auto">
         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-eco-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Trade Inquiry</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Let's Talk Business.</h1>
            <p className="text-gray-500 dark:text-#052C16 text-lg">
              Looking for a reliable supply partner in India? Fill out the RFQ form below, and our export manager will contact you within 24 hours.
            </p>
         </motion.div>
      </section>

      {/* 2. MAIN FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-gray-100 dark:border-gray-800">
          
          {/* Left: Corporate Info (Dark Panel) */}
          <div className="lg:col-span-2 bg-eco-dark dark:bg-black text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
             {/* Abstract Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-eco-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             
             <div className="relative z-10 space-y-10">
                <div>
                   <h3 className="font-serif text-3xl mb-2">Headquarters</h3>
                   <p className="opacity-60 text-sm">Registered Export House</p>
                </div>

                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><MapPin size={18}/></div>
                      <div>
                         <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Office Address</p>
                         <p className="font-medium leading-relaxed">Eco Blossom Exports Pvt Ltd.<br/> City plaza, Kidwaipuri, <br/>Patna, Bihar 800001, India </p>
                      </div>
                   </div>
                   
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Mail size={18}/></div>
                      <div>
                         <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Export Sales</p>
                         <p className="font-medium">info@ecoblossomcreations.com</p>
                         <p className="text-sm opacity-60">info@ecoblossomcreations.com</p>
                      </div>
                   </div>

                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Phone size={18}/></div>
                      <div>
                         <p className="text-xs uppercase tracking-widest opacity-50 mb-1">WhatsApp / Phone</p>
                         <p className="font-medium">+91 9241877276</p>
                         <p className="text-sm opacity-60">(Mon-Sat, 9 AM - 7 PM IST)</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-12 relative z-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                   <Clock size={18} className="text-eco-accent"/>
                   <span className="font-bold">Time Zone: IST (GMT +5:30)</span>
                </div>
                <p className="text-xs opacity-60">Current Office Status: <span className="text-green-400 font-bold">OPEN</span></p>
             </div>
          </div>

          {/* Right: RFQ Form (B2B Specialized) */}
          <div className="lg:col-span-3 p-10 md:p-14">
             <h3 className="text-2xl font-serif mb-8 text-eco-dark dark:text-white">Request for Quotation (RFQ)</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Company Name <span className="text-red-500">*</span></label>
                      <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                         <Building2 size={18} className="text-#052C16 mr-3"/>
                         <input 
                           type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Eco Blossom Creations" 
                          className="w-full bg-transparent focus:outline-none dark:text-white"
                          required
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Contact Person <span className="text-red-500">*</span></label>
                      <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                         <UserIcon />
                         <input 
                           type="text" 
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          placeholder="Krishna Murari" 
                          className="w-full bg-transparent focus:outline-none dark:text-white"
                          required
                        />
                      </div>
                   </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Work Email <span className="text-red-500">*</span></label>
                      <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                         <Mail size={18} className="text-#052C16 mr-3"/>
                         <input 
                           type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="info@ecoblossomcreations.com" 
                          className="w-full bg-transparent focus:outline-none dark:text-white"
                          required
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Phone / WhatsApp <span className="text-red-500">*</span></label>
                      <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                         <Phone size={18} className="text-#052C16 mr-3"/>
                         <input 
                           type="text" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9241877276" 
                          className="w-full bg-transparent focus:outline-none dark:text-white"
                          required
                        />
                      </div>
                   </div>
                </div>

                {/* Row 3 - Logistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Destination</label>
                      <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                         <Globe size={18} className="text-#052C16 mr-3"/>
                         <input 
                           type="text" 
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          placeholder="e.g. Patna, India" 
                          className="w-full bg-transparent focus:outline-none dark:text-white"
                        />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Required Incoterms</label>
                      <select 
                        name="incoterms"
                        value={formData.incoterms}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none dark:text-white dark:bg-gray-900"
                      >
                         <option value="">Select Incoterms</option>
                         <option value="FOB (Free on Board)">FOB (Free on Board)</option>
                         <option value="CIF (Cost, Insurance, Freight)">CIF (Cost, Insurance, Freight)</option>
                         <option value="EXW (Ex Works)">EXW (Ex Works)</option>
                         <option value="DDP (Delivered Duty Paid)">DDP (Delivered Duty Paid)</option>
                      </select>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-#052C16">Product Requirements & Volume <span className="text-red-500">*</span></label>
                   <textarea 
                     rows="3" 
                    name="productRequirements"
                    value={formData.productRequirements}
                    onChange={handleInputChange}
                    placeholder="Mention your product requirements and volume" 
                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-2 focus:outline-none dark:text-white resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-4">
                   <button 
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full bg-eco-dark dark:bg-white text-white dark:text-eco-dark py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                   >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin"/>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit RFQ <Send size={18}/>
                        </>
                      )}
                   </button>
                </div>
             </form>
          </div>
        </div>
      </section>

      {/* 3. EXPORT FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
         <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
               <MessageSquare size={40} className="mx-auto text-eco-accent mb-4"/>
               <h2 className="font-serif text-3xl mb-2">Export FAQs</h2>
               <p className="text-gray-500">Common questions from our international buyers.</p>
            </div>

            <div className="space-y-4">
               {faqs.map((item, i) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
                     <button 
                       onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                       className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                     >
                        <span className="font-bold text-lg text-eco-dark dark:text-white">{item.q}</span>
                        <span className="text-eco-accent">{activeAccordion === i ? <Minus size={18}/> : <Plus size={18}/>}</span>
                     </button>
                     <AnimatePresence>
                        {activeAccordion === i && (
                           <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                              <div className="p-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
                                 {item.a}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}

// Simple Icon Helper
function UserIcon() { return ( <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-#052C16 mr-3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ) }