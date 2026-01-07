"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Grid, List, X, Leaf, Filter, SlidersHorizontal, ChevronRight } from "lucide-react";
import { products } from "@/app/data";
import ProductCard from "@/components/ProductCard";
import ProductListItem from "@/components/ProductListItem";

type ViewMode = "grid" | "list";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const itemsPerPage = 9;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, priceRange, minRating]);

  const filteredProducts = useMemo(() => {
    return products.filter((product: any) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
      // Price and rating filters are optional - only apply if product has these properties
      const matchesPrice = product.price 
        ? product.price >= priceRange[0] && product.price <= priceRange[1]
        : true;
      const matchesRating = product.rating !== undefined 
        ? product.rating >= minRating
        : true;

      return matchesSearch && matchesPrice && matchesRating;
    });
  }, [searchQuery, priceRange, minRating]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const hasFilters = searchQuery || priceRange[0] > 0 || priceRange[1] < 500 || minRating > 0;

  const clearFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 500]);
    setMinRating(0);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Hero Header --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-center mb-10 pt-8"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
              <Leaf className="w-4 h-4" /> 100% Organic & Fresh
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 dark:from-white dark:via-green-400 dark:to-white">
              Our Collection
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Curated products for a <span className="text-green-600 font-semibold">healthier lifestyle</span>.
          </motion.p>
        </motion.div>

        {/* --- Toolbar: Search, Filter Toggle, View Mode --- */}
        <div className="sticky top-20 z-30 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-sm py-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-green-600 transition-colors" />
              <input
                type="text"
                placeholder="Search specific products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all hover:shadow-md"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-200"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
                {hasFilters && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
              </button>

              {/* View Toggle */}
              <div className="flex bg-white dark:bg-gray-800 p-1.5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-xl transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-green-100 dark:bg-green-600 text-green-800 dark:text-white shadow-sm"
                      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-xl transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-green-100 dark:bg-green-600 text-green-800 dark:text-white shadow-sm"
                      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Active Filters Badges (Desktop) */}
          {hasFilters && (
             <motion.div 
               initial={{ opacity: 0, height: 0 }} 
               animate={{ opacity: 1, height: "auto" }}
               className="flex flex-wrap gap-2 mt-4"
             >
                {priceRange[0] > 0 || priceRange[1] < 500 ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                      Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                      <X onClick={() => setPriceRange([0,500])} className="w-3 h-3 cursor-pointer hover:scale-125 transition-transform" />
                    </span>
                ) : null}
                {minRating > 0 && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                      {minRating}+ Stars
                      <X onClick={() => setMinRating(0)} className="w-3 h-3 cursor-pointer hover:scale-125 transition-transform" />
                    </span>
                )}
                <button 
                  onClick={clearFilters}
                  className="text-xs text-gray-500 hover:text-red-500 underline underline-offset-2 ml-2"
                >
                  Clear all
                </button>
             </motion.div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          
          {/* --- Sidebar Filters (Desktop & Mobile Drawer) --- */}
          <AnimatePresence>
            {(showMobileFilters || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
              <>
                {/* Mobile Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowMobileFilters(false)}
                  className={`lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm ${showMobileFilters ? "block" : "hidden"}`}
                />

                <motion.aside
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className={`
                    fixed lg:sticky top-0 lg:top-32 left-0 h-full lg:h-auto z-50 lg:z-0
                    w-80 lg:w-72 bg-white dark:bg-gray-800 lg:bg-transparent dark:lg:bg-transparent
                    shadow-2xl lg:shadow-none p-6 lg:p-0 overflow-y-auto lg:overflow-visible
                    ${showMobileFilters ? "block" : "hidden lg:block"}
                  `}
                >
                  <div className="lg:bg-white lg:dark:bg-gray-800 lg:rounded-3xl lg:p-6 lg:shadow-sm lg:border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <Filter className="w-5 h-5 text-green-600" />
                        Filters
                      </h2>
                      <button 
                        onClick={() => setShowMobileFilters(false)} 
                        className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                         <h3 className="font-semibold text-gray-900 dark:text-gray-100">Price Range</h3>
                         <span className="text-xs font-mono text-gray-500">₹{priceRange[0]} - ₹{priceRange[1]}</span>
                      </div>
                      <div className="px-2">
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                        />
                         <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>₹0</span>
                            <span>₹500+</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating Filter */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Min Rating</h3>
                      <div className="space-y-3">
                        {[4, 3, 2, 1, 0].map((rating) => (
                          <label key={rating} className="flex items-center group cursor-pointer">
                            <div className="relative flex items-center">
                                <input
                                  type="radio"
                                  name="rating"
                                  value={rating}
                                  checked={minRating === rating}
                                  onChange={(e) => setMinRating(Number(e.target.value))}
                                  className="peer sr-only"
                                />
                                <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:border-green-600 peer-checked:border-4 transition-all"></div>
                            </div>
                            <span className="ml-3 text-gray-600 dark:text-gray-300 group-hover:text-green-600 transition-colors">
                              {rating === 0 ? "Any Rating" : `${rating}+ Stars`}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    {/* Reset Button Mobile */}
                     {hasFilters && (
                       <button
                         onClick={clearFilters}
                         className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors mt-4"
                       >
                         Reset Filters
                       </button>
                     )}
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* --- Product Grid --- */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
              Showing <span className="text-gray-900 dark:text-white">{paginatedProducts.length}</span> results
            </div>

            <AnimatePresence mode="wait">
              {paginatedProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 bg-white dark:bg-gray-800 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700"
                >
                  <div className="bg-gray-50 dark:bg-gray-700/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your price range or search terms.</p>
                  <button onClick={clearFilters} className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  <AnimatePresence>
                    {paginatedProducts.map((product) => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                         {viewMode === "grid" ? (
                            <ProductCard product={product} />
                         ) : (
                            <ProductListItem product={product} />
                         )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {/* --- Pagination --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-green-500 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </button>
                
                <div className="flex gap-1 bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                    {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 ${
                        currentPage === i + 1
                            ? "bg-green-600 text-white shadow-md transform scale-105"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                        {i + 1}
                    </button>
                    ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-green-500 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}