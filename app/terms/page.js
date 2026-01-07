"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, AlertCircle, RefreshCcw } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    { id: "general", title: "General Conditions" },
    { id: "products", title: "Products & Services" },
    { id: "billing", title: "Billing & Accuracy" },
    { id: "returns", title: "Returns & Refunds" },
    { id: "liability", title: "Limitation of Liability" }
  ];

  return (
    <main className="bg-eco-cream dark:bg-gray-950 min-h-screen text-eco-dark dark:text-white pt-32 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-eco-accent transition-colors mb-8">
           <ArrowLeft size={16}/> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
           <span className="text-eco-accent font-bold uppercase tracking-widest text-xs mb-4 block">The Fine Print</span>
           <h1 className="font-serif text-5xl md:text-7xl mb-6">Terms of Service</h1>
           <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
             Please read these terms carefully before accessing or using our website. By visiting our site, you agree to be bound by these terms.
           </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sticky Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
           <div className="sticky top-32 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">On this page</p>
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="block text-gray-600 dark:text-gray-400 hover:text-eco-dark dark:hover:text-white hover:pl-2 transition-all duration-300 py-1"
                >
                  {section.title}
                </a>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 lg:col-start-5 space-y-16">
           
           {/* Section 1 */}
           <section id="general" className="scroll-mt-32">
              <div className="w-12 h-12 bg-eco-light dark:bg-gray-800 rounded-full flex items-center justify-center text-eco-dark dark:text-white mb-6">
                 <Scale size={24}/>
              </div>
              <h2 className="font-serif text-3xl mb-4">1. General Conditions</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                 We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
              </p>
           </section>

           {/* Section 2 */}
           <section id="products" className="scroll-mt-32">
              <h2 className="font-serif text-3xl mb-4">2. Products & Services</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                 Certain products may be available exclusively online through the website. These products may have limited quantities.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-800 flex gap-4">
                 <AlertCircle className="text-yellow-600 dark:text-yellow-400 flex-shrink-0" size={24}/>
                 <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note on Nature:</strong> Plants are living things. Slight variations in color, shape, and size are natural and should be expected. The image on the website is for reference.
                 </p>
              </div>
           </section>

           {/* Section 3 */}
           <section id="billing" className="scroll-mt-32">
              <h2 className="font-serif text-3xl mb-4">3. Billing Accuracy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                 We reserve the right to refuse any order you place with us. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address provided.
              </p>
           </section>

           {/* Section 4 */}
           <section id="returns" className="scroll-mt-32">
              <div className="w-12 h-12 bg-eco-light dark:bg-gray-800 rounded-full flex items-center justify-center text-eco-dark dark:text-white mb-6">
                 <RefreshCcw size={24}/>
              </div>
              <h2 className="font-serif text-3xl mb-4">4. Returns & Refunds</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                 Our policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-4">
                 <strong>Perishable goods (Plants):</strong> If a plant arrives damaged, please send us a photo within 24 hours for a replacement.
              </p>
           </section>

           {/* Bottom Agreement */}
           <div className="border-t border-gray-200 dark:border-gray-800 pt-10 mt-10">
              <p className="text-gray-500 text-sm">
                 Questions about the Terms of Service should be sent to us at <a href="mailto:support@ecoblossom.com" className="text-eco-dark dark:text-white underline">support@ecoblossom.com</a>.
              </p>
           </div>

        </div>
      </div>
    </main>
  );
}