// app/sitemap.xml/route.ts
import { MetadataRoute } from "next";

export const dynamic = "force-dynamic";

export function GET(): Response {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes: MetadataRoute.Sitemap = [
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
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
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
