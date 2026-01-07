import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/context/CartContext";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast"; // Notification import
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";
// import { metadata } from "framer-motion/client";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  metadataBase: new URL('https://ecoblossomcreations.com'),
  title: {
    default: "Eco Blossom Creations | Premium Indian Botanicals & Handicrafts Exporter",
    template: "%s | Eco Blossom Creations"
  },
  description: "Premier exporter of Indian botanicals, handicrafts, and agro-products. ISO 9001:2015 certified. Connecting Indian artisans to global markets with sustainable, organic, and ethically sourced products.",
  keywords: [
    // Brand & Core
    "Eco Blossom Creations",
    "Indian botanicals exporter",
    "handicrafts exporter",
    "sustainable products",
    "eco-friendly products",
    "eco-friendly goods",
    "eco-friendly services",
    "eco-friendly solutions",
    "eco-friendly technologies",
    "eco-friendly materials",
    "organic exports India",
    "agro-products exporter",
    "ISO 9001 certified exporter",
    "global trade India",
    "botanical products",
    "Indian exports",
    "wholesale botanicals",
    "organic farming India",
    "export house India",
    
    // Primary Keywords - Makhana / Dry Fruits
    "Fox Nuts",
    "Premium Raw Makhana",
    "Phool Makhana",
    "Lotus Seeds",
    "Makhana Wholesale Supplier",
    
    // Primary Keywords - Superfoods & Powders
    "Organic Moringa Powder",
    "Pure Moringa Leaf Powder",
    "Millet Powder",
    "Superfood Manufacturers India",
    
    // Primary Keywords - Spices & Dehydrated
    "Dehydrated Onion Powder",
    "Pure Onion Powder",
    "Natural Spices Exporter",
    
    // Primary Keywords - Eco-Friendly & Organic Inputs
    "Cow Dung Cake",
    "Gobar Upla",
    "Organic Cow Manure",
    "Natural Fertilizer for Farming",
    "Wood Saw Dust Supplier",
    
    // Long-Tail Keywords - Export & Bulk
    "Fox Nuts Exporters in India",
    "Bulk Moringa Powder Supplier",
    "Dehydrated Onion Powder Manufacturers in India",
    "Cow Dung Cake Exporters",
    "Wholesale Organic Fertilizer Suppliers",
    
    // Long-Tail Keywords - Quality & Nature
    "100% Natural Food Products",
    "Chemical-free Spices Exporter",
    "Farm-to-Global Supply Chain",
    "Sustainable Eco-friendly Products India",
    
    // Location-Based Keywords
    "Makhana Manufacturers in Bihar",
    "Makhana Suppliers in Patna",
    "FMCG Exporters from Bihar",
    "Agro Products Exporters India",
    "Organic Product Manufacturer Patna",
    
    // Blog & Content Keywords
    "Health benefits of Makhana",
    "How to use Moringa Powder for weight loss",
    "Uses of Cow Dung Cake in Havan",
    "Benefits of Organic Manure for plants",
    "Is Onion Powder healthy"
  ],
  authors: [{ name: "Eco Blossom Creations", url: "https://ecoblossomcreations.com" }],
  creator: "Eco Blossom Creations",
  publisher: "Eco Blossom Creations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecoblossomcreations.com',
    siteName: 'Eco Blossom Creations',
    title: 'Eco Blossom Creations | Premium Indian Botanicals & Handicrafts Exporter',
    description: 'Premier exporter of Indian botanicals, handicrafts, and agro-products. ISO 9001:2015 certified. Connecting Indian artisans to global markets.',
    images: [
      {
        url: '/halflogo.png',
        width: 1200,
        height: 630,
        alt: 'Eco Blossom Creations - Indian Botanicals Exporter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco Blossom Creations | Premium Indian Botanicals & Handicrafts Exporter',
    description: 'Premier exporter of Indian botanicals, handicrafts, and agro-products. ISO 9001:2015 certified.',
    images: ['/halflogo.png'],
    creator: '@ecoblossom',
  },
  alternates: {
    canonical: 'https://ecoblossomcreations.com',
  },
  category: 'Export & Trade',
  classification: 'Business',
  icons: {
    icon: [
      { url: '/halflogo.png', type: 'image/png' },
      { url: '/halflogo.png', type: 'image/png', sizes: '32x32' },
      { url: '/halflogo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/halflogo.png', type: 'image/png' },
    ],
    shortcut: '/halflogo.png',
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7fee7' }, // eco-cream for light mode
    { media: '(prefers-color-scheme: dark)', color: '#052e16' }, // eco-dark for dark mode
  ],
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  }
};

// Viewport configuration with theme-color for browser address bar
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7fee7' }, // eco-cream for light mode
    { media: '(prefers-color-scheme: dark)', color: '#052e16' }, // eco-dark for dark mode
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eco Blossom Creations",
  "url": "https://ecoblossomcreations.com",
  "logo": "https://ecoblossomcreations.com/halflogo.png",
  "description": "Premier exporter of Indian botanicals, handicrafts, and agro-products. ISO 9001:2015 certified.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "Patna",
    "addressRegion": "Bihar"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@ecoblossomcreations.com"
  },
  "sameAs": [
    "https://www.facebook.com/EcoBlossomCreation/",
    "https://x.com/EcoBlossomc",
    "https://www.instagram.com/ecoblossomcreation/",
    "https://www.youtube.com/@EcoBlossomCreation"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "ISO 9001:2015 Certified"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${outfit.variable} font-sans bg-eco-cream dark:bg-gray-950 text-eco-dark dark:text-eco-light transition-colors duration-300`}>
        <StructuredData data={organizationSchema} />
        <Providers>
          <CartProvider>
            <ScrollProgress />
            <Navbar />
            <CartSidebar />
            {children}
            <Footer />
            <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
          </CartProvider>
        </Providers>
        <WhatsAppFloat />
      </body>
    </html>
  );
}