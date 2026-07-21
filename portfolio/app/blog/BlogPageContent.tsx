"use client";

import { PenLine, Rss, Cpu } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import PageHero from "@/app/components/ui/PageHero";
import ContactSection from "@/app/components/sections/ContactSection";
import BlogCard, { type BlogPost } from "@/app/components/ui/BlogCard";

export default function BlogPageContent({
  frPosts,
  enPosts,
}: {
  frPosts: BlogPost[];
  enPosts: BlogPost[];
}) {
  const { messages, currentLang } = useLanguage();
  const bp = messages.blogPage;
  const posts = currentLang === "en" ? enPosts : frPosts;

  const topics = [bp.topic1, bp.topic2, bp.topic3, bp.topic4, bp.topic5];

  return (
    <>
      <PageHero
        imageSrc="/elliot-infelta.jpg"
        imageAlt="Elliot Infelta"
        badges={[
          { icon: PenLine, text: bp.heroBadge1 },
          { icon: Cpu,     text: bp.heroBadge2, accent: true },
          { icon: Rss,     text: messages.hero.badgeRole },
        ]}
        title={bp.heroTitle}
        description={bp.heroDesc}
        breadcrumbItems={[{ label: messages.breadcrumb.blog }]}
        breadcrumbHomeLabel={messages.breadcrumb.home}
      />

      <main className="blog-listing-page">
        <div className="container">

          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <div className="blog-empty-icon">
                <PenLine size={32} aria-hidden="true" />
              </div>
              <h2 className="blog-empty-title">{bp.emptyTitle}</h2>
              <p className="blog-empty-desc">{bp.emptyDesc}</p>

              <div className="blog-empty-topics">
                <p className="blog-empty-topics-label">{bp.topicsLabel}</p>
                <div className="blog-empty-chips">
                  {topics.map((topic) => (
                    <span key={topic} className="blog-teaser-topic">{topic}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <ContactSection />
    </>
  );
}
