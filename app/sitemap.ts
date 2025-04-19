import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch dynamic URLs from API
    const dynamicRoutes = await fetchDynamicRoutes();

    // Define static URLs
    const staticRoutes = [
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/`, lastModified: new Date() },
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/#about`, lastModified: new Date() },
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/#contact`, lastModified: new Date() },
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/#portfolio`, lastModified: new Date() },
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/#services`, lastModified: new Date() },
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}/#testimonial`, lastModified: new Date() },
    ];

    // Combine static and dynamic routes
    const routes = [...staticRoutes, ...dynamicRoutes];
    return routes;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}

// Function to fetch dynamic routes
async function fetchDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viraj-art-photos.vercel.app";
    const res = await fetch(`${baseUrl}/api/posts/`); // Removed `next` option

    if (!res.ok) {
      console.error("API request failed:", res.status, res.statusText);
      return [];
    }

    const posts = await res.json();
    if (!Array.isArray(posts)) {
      console.warn("Invalid API response: Expected an array, got:", posts);
      return [];
    }

    return posts.map((post: { slug: string }) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error("Error fetching dynamic routes:", error);
    return [];
  }
}
