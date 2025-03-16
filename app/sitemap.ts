import { log } from "console";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch dynamic URLs from API
    const dynamicRoutes = await fetchDynamicRoutes();

    // Define static URLs
    const staticRoutes = [
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/`, lastModified: new Date() },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/#about`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/#contact`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/#portfolio`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/#services`,
        lastModified: new Date(),
      },
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/#testimonial`,
        lastModified: new Date(),
      },
      
    ];
const routes=[...staticRoutes, ...dynamicRoutes];
console.log("Routes",routes);
    return routes;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}

// Function to fetch dynamic routes (ensure API response is valid)
async function fetchDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viraj-art-photos.vercel.app";

    const res = await fetch(`${baseUrl}api/posts/`, {
      cache: "no-store", // Fetch fresh data every time
    });

    // Ensure the response is valid JSON
    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return [];
    }
    console.log("Response from APi", res);

    const posts = await res.json();

    // Check if the response is an array
    if (!Array.isArray(posts)) {
      console.warn("Invalid API response: Expected an array, got:", posts);
      return [];
    }

    console.log("Fetched posts for sitemap:", posts);

    return posts.map((post: { slug: string }) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error("Error fetching dynamic routes:", error);
    return [];
  }
}
