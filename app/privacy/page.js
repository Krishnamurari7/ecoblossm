"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Lock, Eye } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "collection", title: "Information Collection" },
    { id: "usage", title: "How We Use Data" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "sharing", title: "Third-Party Sharing" },
    { id: "security", title: "Data Security" }
  ];

  return (
    <main className="bg-eco-cream dark:bg-gray-950 min-h-screen text-eco-dark dark:text-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
        <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-eco-accent transition-colors mb-6 sm:mb-8">
           <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4"/> Back to Home
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
           <span className="text-eco-accent font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 sm:mb-4 block">Trust & Transparency</span>
           <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 sm:mb-5 md:mb-6 leading-tight">Privacy Policy</h1>
           <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-500 dark:text-gray-400 max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed">
             Your digital garden is safe with us. We value your privacy as much as we value nature.
             <span className="block mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg opacity-60">Last Updated: December 20, 2025</span>
           </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
        
        {/* Sticky Sidebar (Desktop) */}
        <div className="hidden lg:block lg:col-span-3 xl:col-span-3 2xl:col-span-2">
           <div className="sticky top-24 sm:top-28 md:top-32 lg:top-32 xl:top-36 2xl:top-40 space-y-2 xl:space-y-3">
              <p className="text-xs xl:text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 xl:mb-6">On this page</p>
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="block text-sm xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-400 hover:text-eco-dark dark:hover:text-white hover:pl-2 xl:hover:pl-3 transition-all duration-300 py-1 xl:py-2"
                >
                  {section.title}
                </a>
              ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-8 lg:col-start-5 xl:col-span-8 xl:col-start-5 2xl:col-span-9 2xl:col-start-4 space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 xl:space-y-20 2xl:space-y-24">
           
           {/* Section 1 */}
           <section id="collection" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[72px] xl:h-[72px] 2xl:w-20 2xl:h-20 bg-eco-light dark:bg-gray-800 rounded-full flex items-center justify-center text-eco-dark dark:text-white mb-4 sm:mb-5 md:mb-6">
                 <Eye className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10"/>
              </div>
              <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">1. Information Collection</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-5 md:mb-6">
                 When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address.
              </p>
              <ul className="list-disc pl-5 sm:pl-6 md:pl-7 lg:pl-8 space-y-2 sm:space-y-2.5 md:space-y-3 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-gray-600 dark:text-gray-300">
                 <li>Identify information (Name, Phone number)</li>
                 <li>Payment details (Processed securely via Razorpay/Stripe)</li>
                 <li>Delivery address for shipping purposes</li>
              </ul>
           </section>

           {/* Section 2 */}
           <section id="usage" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
              <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">2. How We Use Data</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                 We use your information to fulfill orders, provide customer support, and (if you opted in) send you our newsletter about new plant arrivals and gardening tips. We never sell your data to third parties.
              </p>
           </section>

           {/* Section 3 */}
           <section id="cookies" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
              <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">3. Cookies & Tracking</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                 Like many websites, we use "cookies" to enhance your experience. These allow us to remember your cart items and understand how you interact with our site so we can improve it.
              </p>
           </section>

           {/* Section 4 */}
           <section id="security" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[72px] xl:h-[72px] 2xl:w-20 2xl:h-20 bg-eco-light dark:bg-gray-800 rounded-full flex items-center justify-center text-eco-dark dark:text-white mb-4 sm:mb-5 md:mb-6">
                 <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10"/>
              </div>
              <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">4. Data Security</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                 To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.
              </p>
           </section>

           {/* Contact Box */}
           <div className="bg-white dark:bg-gray-900 p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 2xl:p-16 rounded-2xl sm:rounded-3xl border border-gray-100 dark:border-gray-800 mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
              <h3 className="font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2 sm:mb-3 md:mb-4 leading-tight">Have specific questions?</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500 mb-4 sm:mb-5 md:mb-6 lg:mb-8">Our Data Protection Officer is available to help.</p>
              <Link href="/contact" className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-eco-dark dark:text-white font-bold border-b-2 border-gray-300 pb-1 sm:pb-1.5 hover:border-eco-accent transition-colors inline-block">
                 Contact Privacy Team
              </Link>
           </div>

        </div>
      </div>
    </main>
  );
}