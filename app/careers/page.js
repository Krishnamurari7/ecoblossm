"use client";
import { ArrowUpRight } from "lucide-react";

export default function Careers() {
  const jobs = [
    { title: "Export Manager", dept: "Sales", type: "Full Time" },
    { title: "Supply Chain Executive", dept: "Logistics", type: "Full Time" },
    { title: "Quality Control Intern", dept: "Operations", type: "Internship" },
  ];

  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-20">
      
      <section className="text-center max-w-3xl mx-auto px-4 mb-20">
         <span className="text-eco-accent font-bold uppercase tracking-widest text-xs mb-4 block">Join Our Team</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-6">Build a Global Career.</h1>
         <p className="text-xl text-gray-500">
            Work with India's fastest-growing botanical export house.
         </p>
      </section>

      <section className="max-w-5xl mx-auto px-4">
         <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800">
            {jobs.map((job, i) => (
               <div key={i} className="p-8 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer">
                  <div>
                     <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-eco-accent transition-colors">{job.title}</h3>
                     <p className="text-sm text-gray-500">{job.dept}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                     <span className="px-3 py-1 bg-eco-cream dark:bg-black rounded-full text-xs font-bold uppercase tracking-wide">{job.type}</span>
                     <ArrowUpRight className="text-gray-300 group-hover:text-eco-dark transition-colors"/>
                  </div>
               </div>
            ))}
         </div>
         <div className="text-center mt-12">
            <p className="text-gray-500">Don't see a fit? Send your CV to <span className="font-bold text-eco-dark dark:text-white">info@ecoblossomcreations.com</span></p>
         </div>
      </section>

    </main>
  );
}