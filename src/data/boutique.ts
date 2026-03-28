import { ensureUniqueValues } from "../lib/validate";

export const boutiqueCategories = [
  {
    slug: "baya",
    title: "Baya",
    summary: "Bijoux de corps, ornements et gestes d'apparition choisis avec tact.",
    lead:
      "Une future sélection pensée pour les pièces qui accompagnent le mouvement, la présence et la délicatesse sans surcharge.",
    image: "/images/baya-bijoux.png",
    imageAlt: "Visuel d'inspiration autour des baya",
    curationAxes: [
      "Confort de port et qualité perçue des finitions.",
      "Pièces qui valorisent la silhouette sans effet costume.",
      "Univers compatibles avec l'esthétique chaleureuse de Masoda."
    ],
    placeholderModules: [
      {
        title: "Sélection partenaire à confirmer",
        description:
          "Les premières références seront ajoutées après validation des marques, des conditions d'affiliation et de la cohérence stylistique."
      }
    ]
  },
  {
    slug: "plantes",
    title: "Plantes",
    summary: "Présences végétales, matières vivantes et idées pour calmer l'espace.",
    lead:
      "Cette rubrique préparera une curation simple autour des plantes et des objets qui rendent un lieu plus vivant, plus respirant et plus accueillant.",
    curationAxes: [
      "Formats adaptés à un intérieur quotidien, pas à une décoration de catalogue.",
      "Objets et plantes pensés pour l'usage réel, l'entretien raisonnable et la douceur visuelle.",
      "Matières naturelles, teintes terreuses et silhouette épurée."
    ],
    placeholderModules: [
      {
        title: "Sélection éditoriale à venir",
        description:
          "Des références seront ajoutées progressivement dès qu'une curation stable pourra être assumée publiquement."
      }
    ]
  },
  {
    slug: "nutrition-anti-stress",
    title: "Nutrition anti-stress",
    summary: "Repères gourmands et produits choisis pour soutenir un quotidien plus apaisé.",
    lead:
      "L'approche reste éditoriale, nuancée et non médicale : l'objectif est de proposer des pistes de mieux-être et non des promesses irréalistes.",
    image: "/images/antiinflamatoire.png",
    imageAlt: "Visuel d'inspiration autour de la nutrition anti-stress",
    curationAxes: [
      "Produits faciles à intégrer dans une routine réaliste.",
      "Discours sobres, sans injonction ni vocabulaire pseudo-thérapeutique.",
      "Affinité avec la gourmandise, le partage et la vitalité."
    ],
    placeholderModules: [
      {
        title: "Références en préparation",
        description:
          "Les futurs liens affiliés seront réservés à des produits clairement identifiés, lisibles et cohérents avec l'univers Masoda."
      }
    ]
  },
  {
    slug: "deco",
    title: "Déco",
    summary: "Objets, couleurs et détails qui rendent un espace plus chaud, plus habité, plus vivant.",
    lead:
      "La future curation déco valorisera les pièces qui installent une ambiance sans transformer l'expérience en showroom impersonnel.",
    curationAxes: [
      "Textures naturelles, formes douces et palette lumineuse.",
      "Objets capables d'ajouter du rythme sans bruit visuel.",
      "Sélection pensée pour l'usage quotidien et la convivialité."
    ],
    placeholderModules: [
      {
        title: "Curation en construction",
        description:
          "La page reste prête à accueillir des pièces partenaires dès qu'une première sélection cohérente pourra être publiée."
      }
    ]
  },
  {
    slug: "art",
    title: "Art",
    summary: "Matières, outils et objets choisis pour nourrir le geste créatif.",
    lead:
      "Cette catégorie accueillera plus tard des références capables de prolonger l'expérience des ateliers à la maison, sans logique de surconsommation.",
    curationAxes: [
      "Objets utiles, beaux et réellement utilisables.",
      "Présence des matières, de la couleur et du geste.",
      "Sélections qui prolongent une pratique créative accessible."
    ],
    placeholderModules: [
      {
        title: "Première sélection à venir",
        description:
          "Le contenu sera enrichi lorsque les premières références partenaires seront suffisamment solides pour être recommandées."
      }
    ]
  }
] as const;

ensureUniqueValues(
  boutiqueCategories.map((category) => category.slug),
  "Catégories boutique"
);

