export const blogCategorySlugs = [
  "bien-etre",
  "confiance-en-soi",
  "nutrition-anti-stress",
  "motivation",
  "partage-communion",
  "repos",
  "arts",
  "ressources-personnelles"
] as const;

export type BlogCategorySlug = (typeof blogCategorySlugs)[number];

export const blogCategories = [
  {
    slug: "bien-etre",
    label: "Bien-être",
    description: "Des repères sensibles pour retrouver du souffle, du rythme et une qualité de présence plus stable."
  },
  {
    slug: "confiance-en-soi",
    label: "Confiance en soi",
    description: "Des textes pour soutenir l'expression de soi sans injonction ni posture forcée."
  },
  {
    slug: "nutrition-anti-stress",
    label: "Nutrition anti-stress",
    description: "Une approche calme de l'alimentation, orientée confort, énergie et mieux-être du quotidien."
  },
  {
    slug: "motivation",
    label: "Motivation",
    description: "Des impulsions concrètes pour relancer l'élan sans se brusquer ni se culpabiliser."
  },
  {
    slug: "partage-communion",
    label: "Partage & communion",
    description: "Des contenus autour de l'accueil, du lien et de la beauté des moments vécus ensemble."
  },
  {
    slug: "repos",
    label: "Repos",
    description: "Un espace pour redonner au ralentissement, à la récupération et à la respiration une vraie place."
  },
  {
    slug: "arts",
    label: "Arts",
    description: "Des inspirations autour du geste, des matières et des références qui nourrissent l'univers Masoda."
  },
  {
    slug: "ressources-personnelles",
    label: "Ressources personnelles",
    description: "Des outils éditoriaux pour construire un appui intime, pratique et durable."
  }
] as const;

export const blogCategoryLabels = Object.fromEntries(
  blogCategories.map((category) => [category.slug, category.label])
) as Record<BlogCategorySlug, string>;
