"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import type { BlogFrontmatter } from "@/app/lib/mdx";

export type BlogPost = BlogFrontmatter & { slug: string };

export default function BlogCard({
  post,
  headingLevel = 2,
}: {
  post: BlogPost;
  headingLevel?: 2 | 3;
}) {
  const { currentLang, messages } = useLanguage();
  const formattedDate = new Date(post.date).toLocaleDateString(
    currentLang === "en" ? "en-US" : "fr-FR",
    { day: "numeric", month: "long", year: "numeric" }
  );
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-meta">
        <span><Calendar size={13} aria-hidden="true" /> {formattedDate}</span>
        <span><Clock size={13} aria-hidden="true" /> {post.readingTime} min</span>
      </div>
      <Heading className="blog-card-title">{post.title}</Heading>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <div className="blog-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-card-tag">{tag}</span>
          ))}
        </div>
      )}
      <span className="blog-card-link">
        {messages.blogPage.readArticle} <ArrowRight size={14} aria-hidden="true" />
      </span>
    </Link>
  );
}
