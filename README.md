# Les ateliers Masoda - Site statique GitHub Pages

Site vitrine statique (HTML, CSS, JS vanilla) prêt pour un hébergement en **GitHub Pages (project site)**.

## Aperçu local

Depuis la racine du projet:

```bash
python3 -m http.server 8000
```

Puis ouvrir:
- [http://localhost:8000/index.html](http://localhost:8000/index.html)

## Déploiement GitHub Pages (project site)

1. Créer un dépôt GitHub (ex: `masoda_site`).
2. Pousser ce dossier à la racine du dépôt.
3. Dans GitHub: `Settings` > `Pages`.
4. Source: `Deploy from a branch`.
5. Branch: `main` (ou `master`), folder: `/ (root)`.
6. Enregistrer.
7. URL finale attendue:
   - `https://yoranrd.github.io/masoda_site/`

## Où modifier les infos événement

Le fichier central est:
- `./data/events.json`

Champs importants:
- `next_event`: prochain atelier affiché sur l'accueil et agenda
- `events[]`: liste complète des ateliers (avec `status`: `upcoming` ou `past`)

## Où coller l'URL Google Calendar embed

Configurer dans:
- `./assets/js/config.js`

Variables:
- `GOOGLE_CALENDAR_EMBED_URL`: URL `src` de l'iframe Google Calendar
- `GOOGLE_CALENDAR_PUBLIC_URL`: lien public du calendrier (ou ICS)

Si `GOOGLE_CALENDAR_EMBED_URL` est vide, la page agenda affiche automatiquement un placeholder explicatif.

## How to create & embed Google Form contact

1. Créer un Google Form depuis [Google Forms](https://forms.google.com).
2. Cliquer sur `Envoyer` puis l'icône `<>` (Intégrer HTML).
3. Copier l'URL `src` de l'iframe.
4. Coller cette URL dans `./assets/js/config.js`:
   - `GOOGLE_FORM_EMBED_URL`
5. Enregistrer et recharger la page `./contact.html`.

Comportement:
- Si `GOOGLE_FORM_EMBED_URL` est vide, un placeholder d'instructions reste affiché.
- Si `GOOGLE_FORM_EMBED_URL` est renseigné, le formulaire est intégré en iframe responsive.

## Modifier les couleurs / design

Le design system est dans:
- `./assets/css/styles.css`

Modifier les variables CSS dans `:root`:
- `--bg`, `--cream`, `--orange`, `--pink`, `--ink`, `--accent-blue`

## Images

Dossier image principal:
- `./assets/img/`

Références:
- `logo-masoda.png` (logo)
- `event-paint-jam.jpg` (visuel prochain atelier)
- `favicon.ico` (favicon placeholder)
- `og-image.png` (OpenGraph placeholder 1200x630)
- `placeholder-event.svg` / `placeholder-partner.svg` (temporaires)

Remplacer les placeholders puis mettre à jour les chemins `cover_image` dans `./data/events.json`.

## SEO et indexation

Fichiers inclus:
- `./sitemap.xml`
- `./robots.txt`

Les fichiers sont déjà renseignés avec `yoranrd/masoda_site`.

## Notes techniques

- Tous les liens internes sont relatifs (`./page.html`) pour compatibilité project site GitHub Pages.
- Navigation mobile accessible (menu bouton + `aria-expanded`).
- Images en lazy-loading sauf image hero prioritaire.
- Validation de cohérence des données événements dans `./assets/js/main.js` (dates, capacité, statut, durée).
