"use client";
import { ClipboardCheck, Microscope, PackageCheck, AlertCircle } from "lucide-react";

export default function Quality() {
  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-20">
      
      {/* 1. HERO */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-24">
         <span className="bg-eco-dark text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Quality Policy</span>
         <h1 className="font-serif text-5xl md:text-7xl mt-6 mb-8">Zero Compromise.</h1>
         <p className="text-xl text-gray-500">
            Every shipment undergoes a rigorous 7-step quality check before it leaves our facility. 
            We adhere to global phytosanitary standards.
         </p>
      </section>

      {/* 2. THE 7-STEP PROCESS */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Soil Analysis", desc: "Checking pH and nutrient levels before potting." },
              { step: "02", title: "Pest Screening", desc: "Microscopic check for mites and bugs." },
              { step: "03", title: "Root Health", desc: "Ensuring developed root systems for survival." },
              { step: "04", title: "Foliage Check", desc: "Removing damaged or yellowing leaves." },
              { step: "05", title: "Pot Stress Test", desc: "Checking ceramic pots for hairline cracks." },
              { step: "06", title: "Packaging Audit", desc: "Drop-test simulation for packaging boxes." },
              { step: "07", title: "Final Inspection", desc: "Pre-shipment verification by QA Manager." },
              { step: "08", title: "Phyto Certification", desc: "Govt. issued clearance for export." },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                 <span className="text-5xl font-serif text-gray-200 dark:text-gray-800 font-bold mb-4 block">{item.step}</span>
                 <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 3. LAB & TESTING */}
      <section className="bg-eco-dark dark:bg-black text-white py-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="font-serif text-4xl mb-6">In-House Testing Lab</h2>
               <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Unlike traders who rely on third parties, Eco Blossom maintains an in-house lab for immediate soil and water testing.
               </p>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg"><Microscope size={20}/> Soil Tester</div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg"><ClipboardCheck size={20}/> EC Meter</div>
               </div>
            </div>
            <div className="h-80 rounded-2xl bg-white/5 border border-white/10 p-8 flex items-center justify-center">
               <div className="text-center">
                  <AlertCircle size={48} className="mx-auto text-eco-accent mb-4"/>
                  <h3 className="text-2xl font-bold mb-2">Claim Rate: &lt; 0.5%</h3>
                  <p className="text-sm opacity-60">We pride ourselves on one of the lowest<br/>breakage rates in the industry.</p>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}