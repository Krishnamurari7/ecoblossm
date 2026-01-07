import { blogPosts } from "@/app/blogData"; // Correct path check karein
import BlogPostClient from "@/components/BlogPostClient"; // Import Client Component
import StructuredData from "@/components/StructuredData";

// Static Params for Build
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Metadata Generation for SEO
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.id == params.id);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Eco Blossom Creations Blog`,
    description: post.excerpt || post.content?.substring(0, 160) || "Read our latest insights on global trade and sustainable farming.",
    keywords: `${post.category}, ${post.title}, export insights, trade blog, sustainable farming`,
    authors: [{ name: post.author || "Eco Blossom Creations" }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content?.substring(0, 160),
      url: `https://ecoblossomcreations.com/blog/${post.id}`,
      images: [
        {
          url: post.image ? `https://ecoblossomcreations.com${post.image}` : 'https://ecoblossomcreations.com/halflogo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || "Eco Blossom Creations"],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.content?.substring(0, 160),
      images: [post.image ? `https://ecoblossomcreations.com${post.image}` : '/halflogo.png'],
    },
    alternates: {
      canonical: `https://ecoblossomcreations.com/blog/${post.id}`,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.id == params.id);
  
  if (!post) {
    return <div className="text-center pt-40">Article Not Found</div>;
  }

  // Article Structured Data (JSON-LD)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.content?.substring(0, 200),
    "image": post.image ? `https://ecoblossomcreations.com${post.image}` : "https://ecoblossomcreations.com/halflogo.png",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author || "Eco Blossom Creations",
      "url": "https://ecoblossomcreations.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eco Blossom Creations",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ecoblossomcreations.com/halflogo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ecoblossomcreations.com/blog/${post.id}`
    },
    "articleSection": post.category
  };

  return (
    <>
      <StructuredData data={articleSchema} />
      <BlogPostClient post={post} />
    </>
  );
}