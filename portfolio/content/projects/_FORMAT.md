# Format des pages projet

Chaque projet = deux fichiers : `nom-projet.fr.mdx` + `nom-projet.en.mdx`
Le slug doit correspondre à l'`id` dans `projectsData.ts`.

## Frontmatter obligatoire

```yaml
---
title: "Nom du projet"
excerpt: "Accroche courte (1 phrase) affichée dans la card."
---
```

## Structure recommandée du corps

```mdx
## Contexte

Problème client, besoin, enjeu.

## Méthodologie

Comment j'ai abordé le projet, étapes clés.

## Résultats

Résultats chiffrés ou qualitatifs.

## Avis client

> "Citation de l'avis client."
> — Prénom Nom, Rôle · Entreprise
```
