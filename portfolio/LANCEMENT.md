# Guide de lancement - Portfolio Elliot Infelta

## Prérequis

- Compte [Vercel](https://vercel.com) (gratuit)
- Compte [Resend](https://resend.com) (gratuit jusqu'à 3 000 emails/mois)
- Un nom de domaine (OVH, Namecheap, Cloudflare…)
- Le repo GitHub du portfolio

---

## Étape 1 - Choisir et configurer ton domaine

1. Achète un nom de domaine (ex. `elliot-infelta.fr`)
2. Note-le, il sera nécessaire aux étapes suivantes

---

## Étape 2 - Configurer Resend (formulaire de contact)

Le formulaire de contact utilise [Resend](https://resend.com) pour envoyer les emails.

### 2a. Vérifier ton domaine dans Resend

1. Va sur [resend.com/domains](https://resend.com/domains)
2. Clique **Add Domain** → entre ton domaine (ex. `elliot-infelta.fr`)
3. Ajoute les enregistrements DNS fournis chez ton registrar
4. Attends la validation (quelques minutes à quelques heures)

### 2b. Mettre à jour l'adresse d'expédition

Dans `app/api/contact/route.ts`, remplace la ligne :

```ts
from: "Portfolio Elliot <onboarding@resend.dev>",
```

par :

```ts
from: "Portfolio Elliot <contact@ton-domaine.fr>",
```

### 2c. Récupérer ta clé API Resend

1. Va sur [resend.com/api-keys](https://resend.com/api-keys)
2. Crée une clé avec les permissions **Sending access**
3. Copie-la - elle ne sera plus affichée ensuite

---

## Étape 3 - Déployer sur Vercel

### 3a. Connecter le repo

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Importe ton repo GitHub `Portfolio`
3. Le framework Next.js sera détecté automatiquement
4. Clique **Deploy** - un premier déploiement se lance (il échouera sur les variables d'env, c'est normal)

### 3b. Configurer les variables d'environnement

Dans Vercel → ton projet → **Settings → Environment Variables**, ajoute :

| Variable | Valeur |
|---|---|
| `RESEND_API_KEY` | Ta clé API Resend |
| `NEXT_PUBLIC_SITE_URL` | `https://ton-domaine.fr` |

### 3c. Re-déployer

Vercel → **Deployments** → clique les `...` du dernier déploiement → **Redeploy**

---

## Étape 4 - Connecter ton domaine à Vercel

1. Vercel → ton projet → **Settings → Domains**
2. Ajoute `ton-domaine.fr` et `www.ton-domaine.fr`
3. Vercel te fournit des enregistrements DNS (A + CNAME)
4. Ajoute-les chez ton registrar
5. Patiente 15–60 min - Vercel gère le certificat SSL automatiquement

---

## Étape 5 - Vérifications post-lancement

- [ ] Le site s'affiche sur `https://ton-domaine.fr`
- [ ] Le formulaire de contact envoie bien un email à `infeltaelliot@gmail.com`
- [ ] Les images (photo, logos projets, CV) s'affichent correctement
- [ ] La version anglaise fonctionne (bouton EN dans la navbar)
- [ ] Tester le partage sur LinkedIn/WhatsApp → la bannière `share-banner.png` s'affiche
- [ ] Soumettre l'URL dans [Google Search Console](https://search.google.com/search-console) pour indexation

---

## Variables d'environnement - récapitulatif

Créer un fichier `.env.local` à la racine pour le développement local :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

En production (Vercel), définir :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://ton-domaine.fr
```

> **Important :** Ne jamais commiter `.env.local` - il est déjà dans le `.gitignore`.

---

## Commandes utiles

```bash
# Développement local
npm run dev

# Build de production (test local)
npm run build
npm run start

# Vérification TypeScript
npx tsc --noEmit
```
