import { ensureUniqueValues } from "../lib/validate";

export const boutiqueCategories = [
  {
    slug: "baya",
    title: "Baya",
    summary: "Bijoux de corps et gestes d'ornement choisis avec subtilité.",
    lead:
      "Une future sélection pensée pour les pièces qui accompagnent la présence, le mouvement et la confiance sans effet déguisement.",
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
          "Les premières références seront ajoutées après validation des marques, des conditions d'affiliation et de leur cohérence avec l'univers Masoda."
      }
    ]
  },
  {
    slug: "plantes",
    title: "Plantes",
    summary: "Présences végétales et objets choisis pour rendre l'espace plus vivant et plus apaisant.",
    lead:
      "Cette rubrique préparera une curation autour des plantes, contenants et détails qui réchauffent un intérieur sans le surcharger.",
    curationAxes: [
      "Formats adaptés à un intérieur quotidien, pas à une décoration de catalogue.",
      "Objets et plantes pensés pour l'usage réel, l'entretien raisonnable et la douceur visuelle.",
      "Matières naturelles, teintes terreuses et silhouette épurée."
    ],
    placeholderModules: [
      {
        title: "Sélection éditoriale à venir",
        description:
          "Des références seront ajoutées progressivement dès qu'une curation stable et publiable pourra être assumée clairement."
      }
    ]
  },
  {
    slug: "nutrition-anti-stress",
    title: "Nutrition anti-stress",
    summary: "Produits et repères choisis pour soutenir un quotidien plus stable, gourmand et apaisé.",
    lead:
      "L'approche restera sobre et éditoriale : proposer des références compatibles avec le mieux-être sans discours miracle ni promesse irréaliste.",
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
          "Les futurs liens affiliés seront réservés à des produits clairement identifiés, lisibles et cohérents avec la ligne de Masoda."
      }
    ]
  },
  {
    slug: "deco",
    title: "Déco",
    summary: "Objets, textures et touches de couleur pour installer une atmosphère plus chaleureuse.",
    lead:
      "La future curation déco valorisera les pièces qui donnent du caractère à un lieu sans l'alourdir ni le rendre impersonnel.",
    curationAxes: [
      "Textures naturelles, formes douces et palette lumineuse.",
      "Objets capables d'ajouter du rythme sans bruit visuel.",
      "Sélection pensée pour l'usage quotidien et la convivialité."
    ],
    placeholderModules: [
      {
        title: "Curation en construction",
        description:
          "La page reste prête à accueillir des pièces partenaires dès qu'une première sélection réellement cohérente pourra être publiée."
      }
    ]
  },
  {
    slug: "art",
    title: "Art",
    summary: "Matières, outils et objets choisis pour prolonger le geste créatif.",
    lead:
      "Cette catégorie accueillera plus tard des références capables de nourrir l'élan créatif à la maison, avec simplicité et discernement.",
    curationAxes: [
      "Objets utiles, beaux et réellement utilisables.",
      "Présence des matières, de la couleur et du geste.",
      "Sélections qui prolongent une pratique créative accessible."
    ],
    placeholderModules: [
      {
        title: "Première sélection à venir",
        description:
          "Le contenu sera enrichi lorsque les premières références partenaires seront suffisamment solides pour être recommandées publiquement."
      }
    ]
  }
] as const;

ensureUniqueValues(
  boutiqueCategories.map((category) => category.slug),
  "Catégories boutique"
);
