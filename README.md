# Masoda — refonte Astro

Refonte du site Masoda en **Astro**, pensée pour un déploiement sur **GitHub Pages** avec une architecture maintenable, mobile-first et orientée conversion.

L'ancien site HTML/CSS/JS est conservé dans `./legacy-static/`.

## Démarrage local

Depuis la racine du projet :

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
```

Le site de staging visé est :

- `https://yoranrd.github.io/masoda_site/`

## Déploiement GitHub Pages

Le dépôt est configuré pour un déploiement via **GitHub Actions** :

- workflow : `./.github/workflows/deploy.yml`
- sortie Astro : `dist/`
- base path GitHub Pages : `/masoda_site`

Dans GitHub :

1. ouvrir `Settings > Pages`
2. choisir `GitHub Actions` comme source

## Où modifier les liens essentiels

Le point d'entrée principal est :

- `./src/data/site.ts`

Variables à mettre à jour facilement :

- `booking.url` : lien de réservation mensuel
- `socialLinks` : Instagram, TikTok, Pinterest
- `contactDetails` : e-mail, lieu, calendrier public, formulaire

## Où modifier les contenus structurés

- `./src/data/workshops.ts` : formats d'ateliers, repères pratiques, éditions archivées
- `./src/data/boutique.ts` : catégories boutique et placeholders affiliés
- `./src/data/faq.ts` : questions fréquentes
- `./src/content/blog/` : articles du journal

## Où modifier le design system

- `./src/styles/global.css` : tokens, surfaces, boutons, rythme global
- `./src/components/` : composants réutilisables

## Assets

Les assets réutilisés doivent vivre dans :

- `./public/images/`

Références attendues :

- logo officiel avec halo
- favicon
- image OG
- visuels atelier / univers boutique

## Architecture

- `src/layouts` : layout global
- `src/components` : composants réutilisables
- `src/pages` : pages Astro
- `src/content/blog` : contenu éditorial Markdown
- `src/data` : données métier et contenus structurés
- `src/config` : configuration site / GitHub Pages
- `src/lib` : helpers et validations build-time
