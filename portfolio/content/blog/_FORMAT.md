# Format des articles de blog

Chaque article = deux fichiers : `mon-article.fr.mdx` + `mon-article.en.mdx`

## Frontmatter obligatoire

```yaml
---
title: "Titre de l'article"
date: "2026-06-15"
tags: ["nextjs", "shopify", "ecommerce"]
excerpt: "Résumé court affiché dans la liste du blog (2 phrases max)."
readingTime: 5
---
```

## Corps de l'article

Le corps est du MDX standard (Markdown + composants React si besoin).

```mdx
## Introduction

Lorem ipsum...

## Section 2

...
```
