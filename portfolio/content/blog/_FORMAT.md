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

Les titres `##` et `###` génèrent automatiquement le sommaire (colonne de droite) — pense à les utiliser pour structurer l'article.

## Tableaux

Supportés (syntaxe Markdown standard, via `remark-gfm`) :

```mdx
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Valeur A  | Valeur B  |
```

Bon pour le SEO (contenu structuré, souvent repris en featured snippet) — à utiliser pour des comparatifs, specs techniques, etc.
