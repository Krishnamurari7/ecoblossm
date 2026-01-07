export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/'],
    },
    sitemap: 'https://ecoblossomcreations.com/sitemap.xml',
  };
}






