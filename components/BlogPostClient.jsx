"use client";
import { motion } from "framer-motion";
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Printer, Link2, Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPostClient({ post }) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  if (!post) return <div className="text-center pt-40">Article not found</div>;

  const shareUrl = currentUrl || `https://ecoblossomcreations.com/blog/${post.id}`;
  const shareTitle = encodeURIComponent(post.title);
  const shareText = encodeURIComponent(post.excerpt || post.content?.substring(0, 200) || '');
  const shareImage = post.image ? encodeURIComponent(`https://ecoblossomcreations.com${post.image}`) : '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}&via=EcoBlossomc`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const handleShare = (platform) => {
    const url = shareLinks[platform];
    if (url) {
      window.open(url, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <main className="pt-32 min-h-screen bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-white pb-20">
      <motion.div 
        className="max-w-4xl mx-auto px-4 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/blog" className="inline-block mb-6 text-eco-accent font-bold uppercase tracking-widest text-xs hover:underline flex items-center gap-2">
             ← Back to Insights
          </Link>
        </motion.div>
        <motion.span 
          className="bg-eco-dark text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest block w-fit mx-auto mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
           {post.category}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-serif text-4xl md:text-6xl mb-8 leading-tight"
        >
          {post.title}
        </motion.h1>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-6 text-gray-500 dark:text-gray-400 text-sm border-y border-gray-200 dark:border-gray-800 py-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <User size={16} className="text-eco-accent"/> {post.author}
          </motion.span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Calendar size={16} className="text-eco-accent"/> {post.date}
          </motion.span>
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Clock size={16} className="text-eco-accent"/> {post.readTime}
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-2xl relative group"
        >
          <motion.img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10">
        <motion.div 
          className="hidden md:flex flex-col gap-4 md:col-span-1 sticky top-32 h-fit items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 [writing-mode:vertical-lr] rotate-180">Share Article</p>
           <motion.button 
             onClick={() => handleShare('facebook')}
             className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full hover:text-blue-600 transition shadow-sm"
             whileHover={{ scale: 1.1, rotate: 5 }}
             whileTap={{ scale: 0.9 }}
             aria-label="Share on Facebook"
             title="Share on Facebook"
           >
             <Facebook size={16}/>
           </motion.button>
           <motion.button 
             onClick={() => handleShare('twitter')}
             className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full hover:text-blue-400 transition shadow-sm"
             whileHover={{ scale: 1.1, rotate: 5 }}
             whileTap={{ scale: 0.9 }}
             aria-label="Share on Twitter"
             title="Share on Twitter"
           >
             <Twitter size={16}/>
           </motion.button>
           <motion.button 
             onClick={() => handleShare('linkedin')}
             className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full hover:text-blue-700 transition shadow-sm"
             whileHover={{ scale: 1.1, rotate: 5 }}
             whileTap={{ scale: 0.9 }}
             aria-label="Share on LinkedIn"
             title="Share on LinkedIn"
           >
             <Linkedin size={16}/>
           </motion.button>
           <div className="h-8 w-[1px] bg-gray-300 dark:bg-gray-700 my-2"></div>
           <motion.button 
             onClick={copyToClipboard}
             className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full hover:text-green-600 transition shadow-sm" 
             title={linkCopied ? "Link Copied!" : "Copy Link"}
             whileHover={{ scale: 1.1, rotate: 5 }}
             whileTap={{ scale: 0.9 }}
           >
             {linkCopied ? <Check size={16}/> : <Link2 size={16}/>}
           </motion.button>
           <motion.button 
             onClick={() => window.print()} 
             className="p-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full hover:text-eco-dark transition shadow-sm" 
             title="Print"
             whileHover={{ scale: 1.1, rotate: 5 }}
             whileTap={{ scale: 0.9 }}
           >
             <Printer size={16}/>
           </motion.button>
        </motion.div>

        <article className="md:col-span-11 prose prose-lg dark:prose-invert prose-stone max-w-none">
          <p className="lead text-2xl font-serif italic text-gray-600 dark:text-gray-300 mb-8 leading-relaxed border-l-4 border-eco-accent pl-6">
            {post.excerpt}
          </p>
          
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-eco-dark first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
               {post.content}
            </p>
            
            <p>
              In the rapidly evolving landscape of international trade, sustainability has moved from being a buzzword to a business imperative. 
              Our analysis shows that <strong className="text-eco-dark dark:text-white">60% of European buyers</strong> now prioritize suppliers with verifiable organic certifications.
            </p>

            <h3 className="text-3xl font-serif font-bold mt-10 mb-6 text-eco-dark dark:text-white">Key Market Trends for 2025</h3>
            <ul className="list-none space-y-4 pl-0">
               <li className="flex gap-4 items-start bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <span className="text-4xl font-serif text-eco-accent opacity-50">01</span>
                  <div>
                     <strong className="block text-eco-dark dark:text-white mb-1">Traceability</strong>
                     Buyers demand end-to-end supply chain visibility using blockchain and IoT trackers.
                  </div>
               </li>
               <li className="flex gap-4 items-start bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  <span className="text-4xl font-serif text-eco-accent opacity-50">02</span>
                  <div>
                     <strong className="block text-eco-dark dark:text-white mb-1">Eco-Packaging</strong>
                     Shift towards 100% biodegradable materials like mycelium and recycled paper.
                  </div>
               </li>
            </ul>

            <h3 className="text-3xl font-serif font-bold mt-10 mb-6 text-eco-dark dark:text-white">The Logistics Challenge</h3>
            <p>
              Managing cold chain logistics for live botanicals requires precision. At Eco Blossom, we utilize 
              <em className="text-eco-dark dark:text-white"> Reefer Containers</em> with humidity control to ensure that plants arrive in Europe as fresh as they left India.
            </p>
            
            <div className="bg-eco-dark text-white p-8 rounded-2xl my-10 text-center">
               <h4 className="font-serif text-2xl mb-4">Interested in Import?</h4>
               <p className="mb-6 opacity-80">Download our full compliance report and product catalog.</p>
               <Link href="/contact" className="bg-white text-eco-dark px-8 py-3 rounded-full font-bold hover:bg-eco-accent hover:text-white transition">
                  Request Report
               </Link>
            </div>
          </div>
        </article>
      </div>

      <motion.div 
        className="md:hidden max-w-3xl mx-auto px-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">Share This Article</p>
        <div className="flex justify-center gap-4">
          <motion.button 
            onClick={() => handleShare('facebook')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Share on Facebook"
          >
            <Facebook size={16}/>
            <span>Facebook</span>
          </motion.button>
          <motion.button 
            onClick={() => handleShare('twitter')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-full text-sm font-semibold hover:bg-blue-500 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Share on Twitter"
          >
            <Twitter size={16}/>
            <span>Twitter</span>
          </motion.button>
          <motion.button 
            onClick={() => handleShare('linkedin')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={16}/>
            <span>LinkedIn</span>
          </motion.button>
          <motion.button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Copy link"
          >
            {linkCopied ? <Check size={16}/> : <Link2 size={16}/>}
            <span>{linkCopied ? 'Copied!' : 'Copy Link'}</span>
          </motion.button>
        </div>
      </motion.div>

    </main>
  );
}