import { products } from './data';
import { blogPosts } from './blogData';

export default function sitemap() {
  const baseUrl = 'https://ecoblossomcreations.com';
  
  const staticRoutes = [
    '',
    '/about',
    '/shop',
    '/services',
    '/blog',
    '/contact',
    '/careers',
    '/sustainability',
    '/quality',
    '/privacy',
    '/terms',
    '/faq',
    '/shipping',
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/shop' || route === '/services' ? 0.9 : 0.8,
  }));

  // Add product pages
  const productSitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Add blog post pages
  const blogSitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticSitemap, ...productSitemap, ...blogSitemap];
}

