import { booking, contactDetails } from "./site";
import { ensureChronologicalRange, ensurePositiveInteger, ensureUniqueValues } from "../lib/validate";

export const atelierBenefits = [
  {
    title: "Créer librement",
    description:
      "L'expérience invite à entrer dans le geste sans pression de résultat, avec assez d'espace pour essayer, respirer et apprécier."
  },
  {
    title: "Revenir à une énergie plus posée",
    description:
      "La musique, les matières et le rythme de l'atelier aident à sortir du mode automatique pour retrouver une présence plus douce."
  },
  {
    title: "Vivre un moment qui reste",
    description:
      "L'attention portée à l'ambiance, à l'accueil et au groupe permet de repartir avec plus qu'une activité : un vrai souvenir sensible."
  }
] as const;

export const workshopFormats = [
  {
    slug: "paint-jam",
    title: "Paint & Jam",
    summary: "Peinture, musique et gourmandise partagée dans une ambiance généreuse et soignée.",
    detail:
      "Le format signature de Masoda : un moment créatif qui mêle expression, playlist, esthétique chaleureuse et plaisir d'être ensemble.",
    tags: ["Peinture", "Musique", "Convivialité"]
  },
  {
    slug: "rituels-couleurs",
    title: "Rituels & couleurs",
    summary: "Respiration, peinture libre et temps de parole dans un cadre calme, lumineux et enveloppant.",
    detail:
      "Une édition plus introspective pour ralentir, se recentrer et laisser la couleur ouvrir un espace de douceur.",
    tags: ["Respiration", "Couleurs", "Recentrage"]
  },
  {
    slug: "jam-mouvement",
    title: "Jam & mouvement",
    summary: "Mouvement doux, énergie collective et création pour remettre le corps et l'élan en circulation.",
    detail:
      "Un format vivant qui commence par le corps avant de glisser vers le geste créatif et le partage.",
    tags: ["Mouvement", "Collectif", "Élan"]
  }
] as const;

export const atelierAudience = [
  "Les personnes qui ont envie de créer, souffler et se retrouver sans avoir besoin d'un niveau artistique préalable.",
  "Les groupes qui recherchent une expérience esthétique, conviviale et facile à rejoindre à Paris.",
  "Les lieux, marques et communautés qui veulent proposer un moment premium, humain et réellement accessible."
] as const;

export const atelierPracticalInfo = [
  "Les éditions privilégient des groupes à taille humaine pour préserver la qualité d'accueil, l'écoute et le confort.",
  "La billetterie du mois centralise les inscriptions et reste le point d'entrée le plus direct pour réserver.",
  "Le matériel, le cadre et les informations pratiques sont précisés sur chaque page de réservation.",
  "Des formats privés, partenaires ou sur mesure peuvent être imaginés à Paris selon le lieu et l'intention."
] as const;

export const privateEventUseCases = [
  "Accueillir une expérience créative dans un lieu culturel, un café, un restaurant ou un espace hybride.",
  "Concevoir une édition privée pour une marque lifestyle, beauté, bien-être ou art de vivre.",
  "Imaginer un temps fort pour une communauté, un collectif ou un lancement à taille humaine."
] as const;

export const archivedEvents = [
  {
    id: "paint-jam-love-2026-02-21",
    title: "Paint & Jam with Love",
    start: "2026-02-21T16:00:00+01:00",
    end: "2026-02-21T18:30:00+01:00",
    location: contactDetails.location,
    capacity: 12,
    excerpt:
      "Une édition autour de l'amour de soi, portée par la peinture, une playlist habitée et une atmosphère chaleureuse.",
    image: "/images/event-paint-jam.jpg",
    bookingUrl: booking.url
  },
  {
    id: "self-love-canvas-2025-11-22",
    title: "Canvas de l'estime de soi",
    start: "2025-11-22T15:30:00+01:00",
    end: "2025-11-22T18:00:00+01:00",
    location: contactDetails.location,
    capacity: 14,
    excerpt:
      "Un atelier peinture guidé pour remettre l'estime de soi, la couleur et le plaisir de créer au centre du moment."
  },
  {
    id: "rituels-couleurs-2025-09-20",
    title: "Rituels & couleurs",
    start: "2025-09-20T16:00:00+02:00",
    end: "2025-09-20T18:00:00+02:00",
    location: "Studio communautaire, Belleville, Paris, France",
    capacity: 10,
    excerpt: "Une parenthèse créative mêlant respiration, peinture libre et échange dans une ambiance douce."
  },
  {
    id: "jam-mouvement-2025-06-14",
    title: "Jam & mouvement",
    start: "2025-06-14T11:00:00+02:00",
    end: "2025-06-14T13:30:00+02:00",
    location: "Maison de quartier, Paris 11e, France",
    capacity: 16,
    excerpt: "Une rencontre entre mouvement doux, création collective et brunch léger pour relancer l'élan du week-end."
  }
] as const;

ensureUniqueValues(
  workshopFormats.map((format) => format.slug),
  "Formats d'atelier"
);

ensureUniqueValues(
  archivedEvents.map((event) => event.id),
  "Éditions archivées"
);

archivedEvents.forEach((event) => {
  ensureChronologicalRange(event.start, event.end, event.title);
  ensurePositiveInteger(event.capacity, `${event.title}: capacité`);
});
