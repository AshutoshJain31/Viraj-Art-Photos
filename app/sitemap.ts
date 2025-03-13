import { MetadataRoute } from "next";

export const dynamic = "force-dynamic"; // Ensure it's dynamically generated

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic URLs from your database or API
  const dynamicRoutes = await fetchDynamicRoutes();

  // Define static URLs
  const staticRoutes = [
    { url: `${process.env.NEXT_PUBLIC_SITE_URL}/`, lastModified: new Date() },
    { url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`, lastModified: new Date() },
    { url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`, lastModified: new Date() },
  ];

  return [...staticRoutes, ...dynamicRoutes];
}

// Function to fetch dynamic routes (replace with your actual data fetch)
async function fetchDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`, {
    cache: "no-store", // Ensures fresh data is always fetched
  });
  const posts = await res.json();

  return posts.map((post: { slug: string }) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`,
    lastModified: new Date(),
  }));
}
