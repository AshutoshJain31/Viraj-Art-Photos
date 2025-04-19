// app/sitemap.xml/route.ts
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

async function fetchDynamicRoutes(baseUrl: string) {
  try {
    const res = await fetch(`${baseUrl}/api/posts`);
    if (!res.ok) return [];
    const posts = await res.json();
    return posts.map((post: { slug: string }) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error("Error fetching dynamic routes:", error);
    return [];
  }
}

export async function GET(): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
    },
  ];

  const dynamicRoutes = await fetchDynamicRoutes(baseUrl);
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.lastModified instanceof Date ? route.lastModified.toISOString() : route.lastModified}</lastmod>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
