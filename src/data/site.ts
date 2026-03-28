import { ensureHttpsUrl } from "../lib/validate";

export const siteIdentity = {
  name: "Masoda",
  legalName: "Les ateliers Masoda",
  tagline: "Ateliers créatifs afro-centrés, bien-être éditorial et future boutique curatée.",
  description:
    "Masoda est un hub hybride afro-centré où les ateliers créatifs ouvrent la voie, entourés d'un journal inspirant et d'une boutique affiliée pensée comme une curation de confiance."
} as const;

export const booking = {
  url: "https://www.billetweb.fr/paint-and-jam-with-love",
  label: "Réserver l'atelier du moment",
  shortLabel: "Réserver",
  note: "Le lien de réservation est centralisé ici pour pouvoir être mis à jour facilement chaque mois."
} as const;

export const socialLinks = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/lesateliersmassoda/",
    handle: "@lesateliersmassoda",
    description: "Retrouver l'ambiance des ateliers, les annonces et les coulisses du projet."
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@lesateliersmassoda1",
    handle: "@lesateliersmassoda1",
    description: "Voir des formats courts autour des gestes créatifs, de l'énergie du groupe et du lifestyle Masoda."
  },
  {
    label: "Pinterest",
    url: "https://fr.pinterest.com/barbandchill/",
    handle: "barbandchill",
    description: "Explorer des inspirations visuelles autour des matières, de la déco, des couleurs et du repos."
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
      "Des rendez-vous pensés pour ralentir, créer, partager et se reconnecter dans une ambiance soignée.",
    href: "/ateliers/"
  },
  {
    title: "Journal inspirant",
    description:
      "Un espace éditorial pour parler de bien-être, de confiance en soi, d'arts, de repos et de ressources personnelles.",
    href: "/blog/"
  },
  {
    title: "Boutique curatée",
    description:
      "Une future sélection affiliée autour de baya, plantes, nutrition anti-stress, déco et art, sans logique de catalogue massif.",
    href: "/boutique/"
  }
] as const;

export const collaborationHighlights = [
  "Activer un lieu avec une proposition chaleureuse et identifiable.",
  "Imaginer une collaboration de marque cohérente avec le rythme Masoda.",
  "Concevoir une expérience créative pour une communauté, un événement ou une activation privée."
] as const;

[
  booking.url,
  ...socialLinks.map((link) => link.url),
  contactDetails.calendarEmbedUrl,
  contactDetails.calendarPublicUrl,
  contactDetails.contactFormEmbedUrl
].forEach((url, index) => ensureHttpsUrl(url, `Configuration externe #${index + 1}`));

