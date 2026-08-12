export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://elliot-infelta.fr").replace(/\/$/, "");

export const BIRTH_DATE = new Date(2002, 8, 13); // 13 septembre 2002

// Blog mis en pause (pas le temps de rédiger) — repasser à true pour tout réactiver
// (nav, footer, teaser à-propos, routes /blog, sitemap).
export const BLOG_ENABLED = false;
