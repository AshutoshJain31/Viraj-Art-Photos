import { NextResponse } from 'next/server';

export async function GET() {
  const urls = [
    {
      url: "http://localhost:3000/",
      lastModified: "2025-03-10",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "http://localhost:3000/about",
      lastModified: "2025-03-05",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "http://localhost:3000/contact",
      lastModified: "2025-02-28",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "http://localhost:3000/products",
      lastModified: "2025-03-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "http://localhost:3000/products/1",
      lastModified: "2025-03-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "http://localhost:3000/products/2",
      lastModified: "2025-03-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "http://localhost:3000/blog",
      lastModified: "2025-03-08",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "http://localhost:3000/blog/post-1",
      lastModified: "2025-03-08",
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "http://localhost:3000/blog/post-2",
      lastModified: "2025-03-07",
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
        url: "http://localhost:3000/blog/post-3",
        lastModified: "2025-03-07",
        changeFrequency: "daily",
        priority: 0.7,
      }
  ];

  // Generate the XML content
  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmls="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url.url}</loc>
          <lastmod>${url.lastModified}</lastmod>
          <changefreq>${url.changeFrequency}</changefreq>
          <priority>${url.priority}</priority>
        </url>`
        )
        .join('')}
    </urlset>
  `;

  // Return the XML sitemap
  return new NextResponse(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=300, stale-while-revalidate', // Caching for 1 hour
    },
  });
}
