import { products } from "@/app/data";
import ProductClient from "@/components/ProductClient";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";

// 1. Static Paths Generate Karna (Build Time ke liye - SSG)
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// 2. Metadata Generation for SEO
export async function generateMetadata({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Premium Export Quality | Eco Blossom Creations`,
    description: product.description || `Premium quality ${product.name} for export. ${product.category}. ISO 9001:2015 certified.`,
    keywords: `${product.name}, ${product.category}, export quality, wholesale`,
    openGraph: {
      title: `${product.name} | Eco Blossom Creations`,
      description: product.description || `Premium quality ${product.name} for export.`,
      url: `https://ecoblossomcreations.com/product/${product.id}`,
      images: [
        {
          url: product.img ? `https://ecoblossomcreations.com${product.img}` : '/halflogo.png',
          width: 1200,
          height: 630,
          alt: `${product.name} - Premium Export Quality`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Eco Blossom Creations`,
      description: product.description || `Premium quality ${product.name} for export.`,
      images: [product.img ? `https://ecoblossomcreations.com${product.img}` : '/halflogo.png'],
      creator: '@EcoBlossomc',
    },
    alternates: {
      canonical: `https://ecoblossomcreations.com/product/${product.id}`,
    },
  };
}

// 3. Main Page Component (Server Side)
export default function ProductDetail({ params }) {
  // URL se ID lekar Product find karein
  const product = products.find((p) => p.id.toString() === params.id);

  // Agar product nahi mila (Safety check, waise generateStaticParams handle kar leta hai)
  if (!product) {
    return <div className="text-center pt-40">Product Not Found</div>;
  }

  // Product Structured Data (JSON-LD)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description || `${product.name} - Premium export quality product`,
    "image": product.img ? `https://ecoblossomcreations.com${product.img}` : "https://ecoblossomcreations.com/halflogo.png",
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "Eco Blossom Creations"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "url": `https://ecoblossomcreations.com/product/${product.id}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120"
    }
  };

  return (
    <>
      <StructuredData data={productSchema} />
      {/* Main Product Display Component */}
      <ProductClient product={product} />

      {/* Floating WhatsApp Button with Specific Product Data */}
      <WhatsAppFloat productDetails={product} />
    </>
  );
}