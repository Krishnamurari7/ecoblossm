"use client";
import { motion } from "framer-motion";
import { Package, PenTool, Sprout, Ship, FileCheck, Users } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: PenTool,
      title: "Private Labeling (OEM)",
      desc: "We manufacture products under your brand name. From logo printing on pots to customized packaging for fertilizers, we handle it all."
    },
    {
      icon: Sprout,
      title: "Contract Farming",
      desc: "Secure your supply chain by pre-booking crops. We partner with farmers to grow specific botanical species tailored to your requirements."
    },
    {
      icon: Package,
      title: "Custom Packaging",
      desc: "Export-compliant packaging solutions including Palletization, Shrink Wrapping, and Barcoding for retail-ready shelf display."
    },
    {
      icon: Ship,
      title: "Logistics & Freight",
      desc: "Complete handling of FOB, CIF, or DDP shipments. We negotiate best rates with Maersk, MSC, and Air Cargo carriers."
    },
    {
      icon: FileCheck,
      title: "Documentation Support",
      desc: "We manage Phytosanitary Certificates, Certificate of Origin, BL, Invoice, and Packing Lists to ensure smooth Customs clearance."
    },
    {
      icon: Users,
      title: "Sourcing Agent",
      desc: "Looking for something specific in India? Our sourcing team can locate manufacturers, audit factories, and inspect quality for you."
    }
  ];

  return (
    <main className="bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pt-32 pb-20">
      
      {/* Header */}
      <section className="text-center px-4 max-w-4xl mx-auto mb-20">
         <span className="text-eco-accent font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-6">Beyond Just Products.</h1>
         <p className="text-xl text-gray-500">
           Comprehensive export solutions designed to simplify international trade for your business.
         </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {services.map((s, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
           >
              <div className="w-16 h-16 bg-eco-cream dark:bg-black rounded-2xl flex items-center justify-center text-eco-dark dark:text-white mb-8 group-hover:bg-eco-accent group-hover:text-white transition-colors">
                 <s.icon size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{s.desc}</p>
              <Link href="/contact" className="text-eco-accent font-bold text-sm uppercase tracking-wider hover:underline">
                 Inquire Now →
              </Link>
           </motion.div>
         ))}
      </section>

      {/* CTA Banner */}
      <section className="mt-24 px-4">
         <div className="max-w-7xl mx-auto bg-eco-dark dark:bg-black text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-eco-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 relative z-10">Have a custom requirement?</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 relative z-10">
               We specialize in tailoring solutions for wholesalers and retail chains. Let's discuss your project.
            </p>
            <Link href="/contact" className="inline-block bg-white text-eco-dark px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform relative z-10">
               Schedule a Consultation
            </Link>
         </div>
      </section>

    </main>
  );
}