"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft, ChevronRight, ListTree, Link2, Check, Share2 } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import type { BlogFrontmatter } from "@/app/lib/mdx";
import type { TocItem } from "@/app/lib/toc";
import { SITE_URL } from "@/app/config";
import Breadcrumb from "@/app/components/ui/Breadcrumb";
import BlogCard, { type BlogPost } from "@/app/components/ui/BlogCard";
import ContactSection from "@/app/components/sections/ContactSection";

function LatestArticles({ posts }: { posts: BlogPost[] }) {
  const { messages } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (posts.length === 0) return null;

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="blog-latest-section">
      <div className="container">
        <div className="section-header blog-latest-header">
          <h2 className="section-title">{messages.blogArticle.latestArticles}</h2>
          <div className="blog-latest-nav">
            <button className="blog-latest-nav-btn" onClick={() => scroll(-1)} aria-label="Précédent">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button className="blog-latest-nav-btn" onClick={() => scroll(1)} aria-label="Suivant">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="blog-latest-scroll" ref={scrollRef}>
          {posts.map((post) => (
            <div key={post.slug} className="blog-latest-item">
              <BlogCard post={post} headingLevel={3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShareButtons({ url, title }: { url: string; title: string }) {
  const { messages } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;

  return (
    <div className="blog-share">
      <p className="blog-sidebar-label">{messages.blogArticle.shareLabel}</p>
      <div className="blog-share-buttons">
        <button className="blog-share-btn" onClick={handleCopy} type="button">
          {copied ? <Check size={15} aria-hidden="true" /> : <Link2 size={15} aria-hidden="true" />}
          {copied ? messages.blogArticle.linkCopied : messages.blogArticle.copyLink}
        </button>
        <a className="blog-share-btn" href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Share2 size={15} aria-hidden="true" /> LinkedIn
        </a>
        <a className="blog-share-btn" href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <Share2 size={15} aria-hidden="true" /> X
        </a>
      </div>
    </div>
  );
}

export default function BlogArticleContent({
  slug,
  frFrontmatter,
  enFrontmatter,
  frBody,
  enBody,
  frToc,
  enToc,
  frLatestPosts,
  enLatestPosts,
}: {
  slug: string;
  frFrontmatter: BlogFrontmatter;
  enFrontmatter: BlogFrontmatter;
  frBody: ReactNode;
  enBody: ReactNode;
  frToc: TocItem[];
  enToc: TocItem[];
  frLatestPosts: BlogPost[];
  enLatestPosts: BlogPost[];
}) {
  const { currentLang, messages } = useLanguage();
  const fm = currentLang === "en" ? enFrontmatter : frFrontmatter;
  const body = currentLang === "en" ? enBody : frBody;
  const toc = currentLang === "en" ? enToc : frToc;
  const latestPosts = currentLang === "en" ? enLatestPosts : frLatestPosts;
  const articleUrl = `${SITE_URL}/blog/${slug}`;

  const formattedDate = new Date(fm.date).toLocaleDateString(
    currentLang === "en" ? "en-US" : "fr-FR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <>
      <main className="blog-article-page">
        <div className="container">
          <Breadcrumb
            items={[
              { label: messages.breadcrumb.blog, href: "/blog" },
              { label: fm.title },
            ]}
            homeLabel={messages.breadcrumb.home}
          />

          <header className="blog-article-header">
            <div className="blog-article-meta">
              <span><Calendar size={14} aria-hidden="true" /> {formattedDate}</span>
              <span><Clock size={14} aria-hidden="true" /> {fm.readingTime} min</span>
            </div>
            <h1 className="blog-article-title">{fm.title}</h1>
          </header>

          <div className="blog-article-layout">
            <div className="blog-article-main">
              <article className="blog-article-body">{body}</article>

              <div className="blog-author-card">
                <Image
                  src="/elliot-infelta.jpg"
                  alt="Elliot Infelta"
                  width={64}
                  height={64}
                  className="blog-author-photo"
                />
                <div>
                  <p className="blog-author-label">{messages.blogArticle.writtenBy}</p>
                  <p className="blog-author-name">Elliot Infelta</p>
                  <p className="blog-author-bio">{messages.blogArticle.authorBio}</p>
                  <Link href="/a-propos" className="blog-author-link">{messages.breadcrumb.about}</Link>
                </div>
              </div>
            </div>

            <aside className="blog-article-sidebar">
              {toc.length > 0 && (
                <nav className="blog-toc" aria-label={messages.blogArticle.tocTitle}>
                  <p className="blog-sidebar-label"><ListTree size={15} aria-hidden="true" /> {messages.blogArticle.tocTitle}</p>
                  <ol className="blog-toc-list">
                    {toc.map((item) => (
                      <li key={item.slug} className={`blog-toc-item blog-toc-item-h${item.level}`}>
                        <a href={`#${item.slug}`}>{item.text}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {fm.tags.length > 0 && (
                <div className="blog-sidebar-tags">
                  <p className="blog-sidebar-label">{messages.blogArticle.tagsLabel}</p>
                  <div className="blog-article-tags">
                    {fm.tags.map((tag) => (
                      <span key={tag} className="blog-article-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              <ShareButtons url={articleUrl} title={fm.title} />
            </aside>
          </div>
        </div>
      </main>

      <LatestArticles posts={latestPosts} />

      <ContactSection />
    </>
  );
}
