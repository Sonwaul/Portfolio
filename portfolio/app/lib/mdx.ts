import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type Locale = "fr" | "en";

export type BlogFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
};

export type ProjectFrontmatter = {
  title: string;
  excerpt?: string;
};

function readMdx(dir: string, slug: string, locale: Locale) {
  const filePath = path.join(CONTENT_ROOT, dir, `${slug}.${locale}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export function getAllBlogPosts(locale: Locale): (BlogFrontmatter & { slug: string })[] {
  const dir = path.join(CONTENT_ROOT, "blog");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(`.${locale}.mdx`))
    .map((file) => {
      const slug = file.replace(`.${locale}.mdx`, "");
      const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      return { ...(data as BlogFrontmatter), slug };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, locale: Locale) {
  const { data, content } = readMdx("blog", slug, locale);
  return { frontmatter: data as BlogFrontmatter, source: content };
}

export function getAllBlogSlugs(): string[] {
  const dir = path.join(CONTENT_ROOT, "blog");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".fr.mdx"))
    .map((f) => f.replace(".fr.mdx", ""));
}

// ─── Projects ────────────────────────────────────────────────────────────────

export function getProjectContent(slug: string, locale: Locale) {
  const { data, content } = readMdx("projects", slug, locale);
  return { frontmatter: data as ProjectFrontmatter, source: content };
}

export function getAllProjectSlugs(): string[] {
  const dir = path.join(CONTENT_ROOT, "projects");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".fr.mdx"))
    .map((f) => f.replace(".fr.mdx", ""));
}
