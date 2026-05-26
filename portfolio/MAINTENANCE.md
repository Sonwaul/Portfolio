# Guide de maintenance — Portfolio Elliot Infelta

## Architecture générale

Le portfolio est une **Single Page Application** construite avec **Next.js 15 (App Router)** et **React 19**.

```
portfolio/
├── app/
│   ├── api/contact/route.ts     ← API d'envoi email (Resend)
│   ├── components/
│   │   ├── header/Navbar.tsx    ← Navigation sticky
│   │   ├── sections/            ← Les 6 sections de la page
│   │   └── ui/                  ← Composants réutilisables (Modal, CvFloatingButton)
│   ├── data/                    ← Toutes les données du site (éditer ici)
│   ├── hooks/useScrollReveal.ts ← Animation d'apparition au scroll
│   ├── i18n/                    ← Traductions FR / EN
│   ├── config.ts                ← URL du site
│   ├── globals.css              ← Tous les styles CSS
│   ├── layout.tsx               ← Metadata SEO + structure HTML
│   └── page.tsx                 ← Assemblage des sections
├── public/                      ← Fichiers statiques (images, CV, SVG)
├── LANCEMENT.md
└── MAINTENANCE.md
```

---

## Modifier le contenu

### Projets (`app/data/projectsData.ts`)

Chaque projet est un objet dans le tableau `projects`. Pour **ajouter un projet** :

```ts
{
  id: "proj17",                          // identifiant unique
  title: "Nom du projet",
  role: "Ton rôle en FR",
  roleEn: "Ton rôle en EN",
  shortDescription: "Résumé court FR",   // affiché sur la carte
  shortDescriptionEn: "Short summary EN",
  description: "Description complète FR",// affiché dans la modale
  descriptionEn: "Full description EN",
  tags: ["Shopify", "PHP"],              // filtres + tech stack modale
  year: "2026",
  link: "https://...",                   // null si pas de lien
  accentColor: "#6C9A8B",               // couleur de la carte (hex)
  logo: "/projects/nom-du-logo.png",    // image dans public/projects/
}
```

**Ordre d'affichage :** les projets s'affichent dans l'ordre du tableau (du premier au dernier).

Pour **modifier l'ordre des filtres** par technologie, édite le tableau `TAG_ORDER` dans `app/components/sections/ProjectsSection.tsx`.

---

### Expériences & Formations (`app/data/timelineData.ts`)

Deux tableaux distincts : `timelineItems` (expériences) et `educationItems` (formations).

```ts
{
  id: "exp5",
  type: "experience",              // "experience" ou "education"
  company: "Nom de l'entreprise",
  role: "Poste en FR",
  roleEn: "Job title EN",
  location: "Ville",
  startDate: "Sept. 2026",
  endDate: null,                   // null = poste actuel
  current: true,
  shortDescription: "Résumé FR",
  shortDescriptionEn: "Summary EN",
  missions: ["Mission 1", "..."],
  missionsEn: ["Mission 1 EN", "..."],
  tags: ["Shopify", "PHP"],        // badges affichés dans la modale
  logo: "/experiences/logo.png",   // image dans public/experiences/
  accentColor: "#2D6A5A",         // couleur de la bannière modale
}
```

**Items avec onglets** (ex. HUGGII) : utilise la propriété `tabs` à la place de `missions` :
```ts
tabs: [
  { label: "Onglet 1", missions: ["..."] },
  { label: "Onglet 2", missions: ["..."] },
]
```

---

### Compétences (`app/data/skillsData.ts`)

3 colonnes (`skillZones`) : `management`, `tech`, `tools`. Chaque colonne a des `groups`, chaque groupe a des `skills`.

```ts
{
  title: "Nom du groupe FR",
  titleEn: "Group name EN",
  skills: [
    { name: "Compétence FR", nameEn: "Skill EN", logo: "/skills/logo.svg" },
  ],
}
```

Les logos SVG sont dans `public/skills/`.

---

### Témoignages (`app/data/reviewsData.ts`)

```ts
{
  id: "r1",
  author: "Prénom Nom",
  role: "Poste FR",
  roleEn: "Job title EN",
  company: "Entreprise",
  text: "Témoignage en FR...",
  textEn: "Testimonial in EN...",
  avatar: "/reviews/photo.jpg",    // optionnel
  rating: 5,
}
```

---

## Modifier les textes de l'interface

Tous les labels, titres de sections et textes statiques sont dans les fichiers JSON :

- `app/i18n/fr.json` — version française
- `app/i18n/en.json` — version anglaise

Les deux fichiers doivent avoir exactement les mêmes clés.

---

## Modifier les styles

Tous les styles sont centralisés dans **`app/globals.css`**. Le fichier est organisé par sections :

```
1.  VARIABLES & RESET
2.  TYPOGRAPHY
3.  LAYOUT
4.  NAVBAR
5.  HERO SECTION
6.  EXPERIENCE SECTION
7.  SKILLS SECTION
8.  PROJECTS SECTION
9.  TESTIMONIALS SECTION
10. CONTACT SECTION
11. CV PREVIEW
12. MODAL
13. CV MODAL
14. ANIMATIONS
```

Les couleurs principales sont définies en variables CSS au début du fichier :

```css
:root {
  --c-bg:      #F7F5F0;   /* fond général */
  --c-text:    #1C2B21;   /* texte principal */
  --c-accent:  #6C9A8B;   /* vert sauge (couleur principale) */
  --c-hover:   #3E7C59;   /* vert foncé (hover) */
  --c-muted:   ...;       /* texte secondaire */
  --c-surface: ...;       /* fond des badges */
  --c-border:  ...;       /* bordures */
  --c-bonus:   ...;       /* années, détails */
}
```

---

## Mettre à jour le CV

Remplace simplement le fichier `public/CV-Elliot.pdf` par la nouvelle version en gardant le même nom.

---

## Mettre à jour la photo de profil

Remplace `public/elliot-infelta.jpg` en gardant exactement le même nom de fichier.
Format recommandé : JPG, ratio portrait (~420×600px minimum).

---

## Ajouter un logo projet ou expérience

1. Place l'image dans `public/projects/` ou `public/experiences/`
2. Format recommandé : PNG avec fond transparent, ~400×200px
3. Référence-le dans les données : `logo: "/projects/nom.png"`

---

## SEO — mettre à jour les métadonnées

Les métadonnées globales (titre, description, OpenGraph) sont dans `app/layout.tsx`.
L'URL du site est dans `app/config.ts` (surchargeable via `NEXT_PUBLIC_SITE_URL`).
Les schemas JSON-LD (Google Rich Results) sont dans `app/components/JsonLd.tsx`.

---

## Formulaire de contact

- **API Route :** `app/api/contact/route.ts`
- **Service :** Resend
- **Destinataire :** `infeltaelliot@gmail.com` (modifiable dans le fichier)
- **Variable d'env requise :** `RESEND_API_KEY`

Pour changer l'adresse de réception, modifie le champ `to:` dans `route.ts`.

---

## Déploiement continu

Chaque `git push` sur la branche `main` déclenche automatiquement un nouveau déploiement sur Vercel. Aucune action manuelle nécessaire.

Pour tester en local avant de pousser :

```bash
npm run dev          # serveur de développement sur localhost:3000
npm run build        # vérifie que le build passe sans erreur
```
