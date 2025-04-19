// app/sitemap.xml/route.ts (App Router - using MetadataRoute.Sitemap)

import { MetadataRoute } from "next";

export const dynamic = 'force-dynamic'; // <-- ✅ Add this to force dynamic generation

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viraj-art-photos.vercel.app";

    // Fetch dynamic URLs
    const dynamicRoutes = await fetchDynamicRoutes(baseUrl);

    // Define static URLs
    const staticRoutes: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/`, lastModified: new Date() },
      { url: `${baseUrl}/#about`, lastModified: new Date() },
      { url: `${baseUrl}/#contact`, lastModified: new Date() },
      { url: `${baseUrl}/#portfolio`, lastModified: new Date() },
      { url: `${baseUrl}/#services`, lastModified: new Date() },
      { url: `${baseUrl}/#testimonial`, lastModified: new Date() },
    ];

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}

// Helper function to fetch blog post routes
async function fetchDynamicRoutes(baseUrl: string): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(`${baseUrl}/api/posts`, {
      // Add cache control if needed
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return [];
    }

    const posts = await res.json();
    if (!Array.isArray(posts)) {
      console.warn("Invalid API response format:", posts);
      return [];
    }

    return posts.map((post: { slug: string }) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return [];
  }
}
