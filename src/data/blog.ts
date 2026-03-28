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
    description: "Des repères simples pour retrouver du souffle, du rythme et une présence plus douce au quotidien."
  },
  {
    slug: "confiance-en-soi",
    label: "Confiance en soi",
    description: "Des textes pour nourrir l'expression personnelle sans injonction ni posture surjouée."
  },
  {
    slug: "nutrition-anti-stress",
    label: "Nutrition anti-stress",
    description: "Des pistes de mieux-être autour de l'alimentation, sans promesse médicale ni discours punitif."
  },
  {
    slug: "motivation",
    label: "Motivation",
    description: "Des impulsions réalistes pour relancer l'élan créatif, même quand l'énergie est dispersée."
  },
  {
    slug: "partage-communion",
    label: "Partage & communion",
    description: "Des contenus qui réhabilitent les moments collectifs, l'accueil et la beauté des liens choisis."
  },
  {
    slug: "repos",
    label: "Repos",
    description: "Un espace pour parler de récupération, de lenteur et de respiration sans culpabilité."
  },
  {
    slug: "arts",
    label: "Arts",
    description: "Des inspirations autour du geste créatif, des matières et des références qui nourrissent Masoda."
  },
  {
    slug: "ressources-personnelles",
    label: "Ressources personnelles",
    description: "Des repères éditoriaux pour construire une boîte à outils intime, pratique et durable."
  }
] as const;

export const blogCategoryLabels = Object.fromEntries(
  blogCategories.map((category) => [category.slug, category.label])
) as Record<BlogCategorySlug, string>;

