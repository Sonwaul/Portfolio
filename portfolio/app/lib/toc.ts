export interface TocItem {
  level: 2 | 3;
  text: string;
  slug: string;
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

export function extractToc(source: string): TocItem[] {
  const toc: TocItem[] = [];

  for (const line of source.split("\n")) {
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (h2) {
      const text = stripInlineMarkdown(h2[1]);
      toc.push({ level: 2, text, slug: slugify(text) });
    } else if (h3) {
      const text = stripInlineMarkdown(h3[1]);
      toc.push({ level: 3, text, slug: slugify(text) });
    }
  }

  return toc;
}
