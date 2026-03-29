import { ensureHttpsUrl } from "../lib/validate";

export const siteIdentity = {
  name: "Masoda",
  legalName: "Les ateliers Masoda",
  tagline: "Ateliers créatifs afro-centrés, journal lifestyle sensible et curation à venir.",
  description:
    "Masoda est un hub afro-centré où l'atelier ouvre la rencontre : on vient y créer, ralentir et partager, puis prolonger l'expérience à travers un journal inspirant et une future curation choisie avec soin."
} as const;

export const booking = {
  url: "https://www.billetweb.fr/paint-and-jam-with-love",
  label: "Réserver la prochaine édition",
  shortLabel: "Réserver",
  note: "Le lien de réservation du moment est mis à jour ici pour garder un accès clair et immédiat à la prochaine édition."
} as const;

export const socialLinks = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/lesateliersmassoda/",
    handle: "@lesateliersmassoda",
    description: "Retrouver l'ambiance des ateliers, les annonces et les images qui donnent le ton du projet."
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@lesateliersmassoda1",
    handle: "@lesateliersmassoda1",
    description: "Voir le geste, l'énergie du groupe et les fragments de lifestyle qui prolongent l'univers Masoda."
  },
  {
    label: "Pinterest",
    url: "https://fr.pinterest.com/barbandchill/",
    handle: "barbandchill",
    description: "Explorer les palettes, les matières, les objets et les inspirations visuelles qui nourrissent l'esthétique Masoda."
  }
] as const;

export const contactDetails = {
  organizerName: "Barbara",
  email: "yoranrd@gmail.com",
  location: "BMK Folie-Bamako, Rue Jean-Pierre Timbaud, Paris, France",
  city: "Paris",
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/embed?src=c21f6ba62a58f8471c091fe7bd26341d3a626e462d8c684e3fdc5e3fe89d36a6%40group.calendar.google.com&ctz=Europe%2FParis",
  calendarPublicUrl:
    "https://calendar.google.com/calendar/ical/c21f6ba62a58f8471c091fe7bd26341d3a626e462d8c684e3fdc5e3fe89d36a6%40group.calendar.google.com/public/basic.ics",
  contactFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdpyeJKtVr2VQ5UQrZ-n158e3OfWfoUCEfDcxCrtdwu4gs2cg/viewform?embedded=true"
} as const;

export const mainNavigation = [
  { href: "/", label: "Accueil" },
  { href: "/ateliers/", label: "Ateliers" },
  { href: "/boutique/", label: "Boutique" },
  { href: "/blog/", label: "Blog" }
] as const;

export const secondaryNavigation = [
  { href: "/a-propos/", label: "À propos" },
  { href: "/partenaires/", label: "Partenaires" },
  { href: "/evenements/", label: "Événements" },
  { href: "/contact/", label: "Contact" },
  { href: "/faq/", label: "FAQ" }
] as const;

export const footerSections = [
  {
    title: "Explorer",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/ateliers/", label: "Ateliers" },
      { href: "/boutique/", label: "Boutique" },
      { href: "/blog/", label: "Blog" }
    ]
  },
  {
    title: "Découvrir",
    links: [
      { href: "/a-propos/", label: "À propos" },
      { href: "/evenements/", label: "Événements" },
      { href: "/faq/", label: "FAQ" }
    ]
  },
  {
    title: "Collaborer",
    links: [
      { href: "/partenaires/", label: "Partenaires" },
      { href: "/contact/", label: "Contact" },
      { href: `mailto:${contactDetails.email}`, label: "E-mail direct" }
    ]
  }
] as const;

export const homePillars = [
  {
    title: "Ateliers créatifs",
    description:
      "Des rendez-vous où l'on vient créer, respirer et partager dans une atmosphère soignée, chaleureuse et accessible.",
    href: "/ateliers/"
  },
  {
    title: "Journal inspirant",
    description:
      "Des textes pour nourrir le bien-être, la confiance, le repos et l'élan créatif avec une voix claire et sensible.",
    href: "/blog/"
  },
  {
    title: "Boutique curatée",
    description:
      "Une future sélection affiliée courte et cohérente autour des baya, des plantes, de la nutrition anti-stress, de la déco et de l'art.",
    href: "/boutique/"
  }
] as const;

export const collaborationHighlights = [
  "Donner à un lieu une expérience chaleureuse, visuelle et immédiatement lisible.",
  "Imaginer avec une marque une activation cohérente avec l'univers lifestyle et créatif de Masoda.",
  "Créer un format sur mesure pour une communauté, un lancement ou un moment privé à taille humaine."
] as const;

[
  booking.url,
  ...socialLinks.map((link) => link.url),
  contactDetails.calendarEmbedUrl,
  contactDetails.calendarPublicUrl,
  contactDetails.contactFormEmbedUrl
].forEach((url, index) => ensureHttpsUrl(url, `Configuration externe #${index + 1}`));
