"use client";
import { motion } from "framer-motion";
import { Leaf, Heart, Recycle, Droplets, Users, Sun } from "lucide-react";

export default function Sustainability() {
  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-4xl mx-auto px-4 mb-20">
         <span className="text-eco-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Commitment</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-6">Growing responsibly.</h1>
         <p className="text-xl text-gray-500">
            We believe that profit should never come at the cost of the planet or its people.
         </p>
      </section>

      {/* 2. IMPACT STATS */}
      <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
               <Recycle size={48} className="mx-auto text-green-500 mb-4"/>
               <h3 className="text-4xl font-serif font-bold mb-2">15 Tons</h3>
               <p className="text-sm text-gray-500 uppercase tracking-widest">Plastic Saved Annually</p>
            </div>
            <div className="p-6 border-x border-gray-100 dark:border-gray-800">
               <Users size={48} className="mx-auto text-blue-500 mb-4"/>
               <h3 className="text-4xl font-serif font-bold mb-2">250+</h3>
               <p className="text-sm text-gray-500 uppercase tracking-widest">Artisan Families Supported</p>
            </div>
            <div className="p-6">
               <Sun size={48} className="mx-auto text-yellow-500 mb-4"/>
               <h3 className="text-4xl font-serif font-bold mb-2">100%</h3>
               <p className="text-sm text-gray-500 uppercase tracking-widest">Solar Powered Warehouses</p>
            </div>
         </div>
      </section>

      {/* 3. CORE INITIATIVES */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
            <img 
               src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=800&fit=crop&q=80" 
               alt="Sustainable organic farming - hands holding soil with green plants, representing Project Mitti and eco-friendly agricultural practices" 
               className="w-full h-full object-cover"
               loading="lazy"
               onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1530836369250-ef72a3f5eada?w=1200&h=800&fit=crop&q=80';
               }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white z-10">
               <p className="font-bold text-sm uppercase tracking-widest mb-2">Initiative #01</p>
               <h2 className="font-serif text-4xl">Project "Mitti"</h2>
            </div>
         </div>
         <div className="space-y-12">
            {[
              { icon: Leaf, title: "Biodegradable Packaging", desc: "We have replaced all Styrofoam and bubble wrap with honeycomb paper and cornstarch-based fillers." },
              { icon: Droplets, title: "Water Conservation", desc: "Our contract farms utilize drip irrigation systems, reducing water usage by 40% compared to traditional farming." },
              { icon: Heart, title: "Fair Trade Practice", desc: "We pay 20% above the market rate to our potters in Khurja and weavers in Bengal, ensuring financial stability." }
            ].map((item, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, x: 50 }} 
                 whileInView={{ opacity: 1, x: 0 }} 
                 transition={{ delay: i * 0.2 }}
                 className="flex gap-6"
               >
                  <div className="w-16 h-16 rounded-full bg-eco-light dark:bg-gray-800 flex items-center justify-center flex-shrink-0 text-eco-dark dark:text-white">
                     <item.icon size={28}/>
                  </div>
                  <div>
                     <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                     <p className="text-gray-500 leading-relaxed text-lg">{item.desc}</p>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 4. CERTIFICATES */}
      <section className="text-center py-16 bg-eco-dark text-white">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-serif text-3xl mb-8">Recognized for Sustainability</h2>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="border border-white/20 px-8 py-4 rounded-xl">
                  <span className="block text-2xl font-bold mb-1">FSC</span>
                  <span className="text-xs opacity-60 uppercase">Certified Paper</span>
               </div>
               <div className="border border-white/20 px-8 py-4 rounded-xl">
                  <span className="block text-2xl font-bold mb-1">Rainforest</span>
                  <span className="text-xs opacity-60 uppercase">Alliance</span>
               </div>
               <div className="border border-white/20 px-8 py-4 rounded-xl">
                  <span className="block text-2xl font-bold mb-1">SEDEX</span>
                  <span className="text-xs opacity-60 uppercase">Ethical Audit</span>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}