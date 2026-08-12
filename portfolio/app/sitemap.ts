import type { MetadataRoute } from "next";
import { SITE_URL, BLOG_ENABLED } from "./config";
import { getAllBlogPosts } from "./lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogEntries: MetadataRoute.Sitemap = BLOG_ENABLED
    ? [
        { url: `${SITE_URL}/blog`, lastModified, changeFrequency: "weekly", priority: 0.6 },
        ...getAllBlogPosts("fr").map((post) => ({
          url: `${SITE_URL}/blog/${post.slug}`,
          lastModified: new Date(post.date),
          changeFrequency: "monthly" as const,
          priority: 0.5,
        })),
      ]
    : [];

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/realisations`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    ...blogEntries,
  ];
}
