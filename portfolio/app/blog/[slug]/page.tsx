import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllBlogPosts, getAllBlogSlugs, getBlogPost } from "@/app/lib/mdx";
import { SITE_URL } from "@/app/config";
import { extractToc, slugify } from "@/app/lib/toc";
import BlogArticleContent from "./BlogArticleContent";

const LATEST_COUNT = 4;

function flattenText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return flattenText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function H2({ children }: { children?: ReactNode }) {
  return <h2 id={slugify(flattenText(children))}>{children}</h2>;
}

function H3({ children }: { children?: ReactNode }) {
  return <h3 id={slugify(flattenText(children))}>{children}</h3>;
}

function Table({ children }: { children?: ReactNode }) {
  return (
    <div className="blog-table-wrapper">
      <table>{children}</table>
    </div>
  );
}

const mdxOptions = { mdxOptions: { remarkPlugins: [remarkGfm] } };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

function loadPost(slug: string) {
  try {
    const fr = getBlogPost(slug, "fr");
    const en = getBlogPost(slug, "en");
    return { fr, en };
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = loadPost(slug);
  if (!post) return {};

  const { title, excerpt } = post.fr.frontmatter;

  return {
    title,
    description: excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: `/blog/${slug}`,
      siteName: "Elliot Infelta",
      title: `${title} | Elliot Infelta`,
      description: excerpt,
      images: [
        { url: "/share-banner.png", width: 1200, height: 630, alt: "Elliot Infelta - Lead Projet & Développeur Full Stack" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Elliot Infelta`,
      description: excerpt,
      images: ["/share-banner.png"],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = loadPost(slug);
  if (!post) notFound();

  const { fr, en } = post;

  const frLatestPosts = getAllBlogPosts("fr").filter((p) => p.slug !== slug).slice(0, LATEST_COUNT);
  const enLatestPosts = getAllBlogPosts("en").filter((p) => p.slug !== slug).slice(0, LATEST_COUNT);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fr.frontmatter.title,
    description: fr.frontmatter.excerpt,
    datePublished: fr.frontmatter.date,
    dateModified: fr.frontmatter.date,
    author: { "@type": "Person", name: "Elliot Infelta", url: SITE_URL },
    keywords: fr.frontmatter.tags.join(", "),
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogArticleContent
        slug={slug}
        frFrontmatter={fr.frontmatter}
        enFrontmatter={en.frontmatter}
        frBody={<MDXRemote source={fr.source} components={{ h2: H2, h3: H3, table: Table }} options={mdxOptions} />}
        enBody={<MDXRemote source={en.source} components={{ h2: H2, h3: H3, table: Table }} options={mdxOptions} />}
        frToc={extractToc(fr.source)}
        enToc={extractToc(en.source)}
        frLatestPosts={frLatestPosts}
        enLatestPosts={enLatestPosts}
      />
    </>
  );
}
