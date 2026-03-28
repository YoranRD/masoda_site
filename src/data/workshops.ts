import { booking, contactDetails } from "./site";
import { ensureChronologicalRange, ensurePositiveInteger, ensureUniqueValues } from "../lib/validate";

export const atelierBenefits = [
  {
    title: "Créer sans pression",
    description:
      "Les formats Masoda privilégient l'expression, l'écoute et la présence plutôt que la performance ou la comparaison."
  },
  {
    title: "Retrouver un rythme plus doux",
    description:
      "La musique, les matières et le collectif aident à sortir du pilotage automatique pour revenir à une énergie plus posée."
  },
  {
    title: "Partager une expérience soignée",
    description:
      "Chaque atelier cherche un équilibre entre esthétique, convivialité, attention aux détails et chaleur humaine."
  }
] as const;

export const workshopFormats = [
  {
    slug: "paint-jam",
    title: "Paint & Jam",
    summary: "Peinture, playlist partagée et moment gourmand pour créer dans une ambiance généreuse.",
    detail:
      "Un format signature où l'art devient un espace de respiration, d'amour de soi et de communion par la musique.",
    tags: ["Peinture", "Playlist", "Partage"]
  },
  {
    slug: "rituels-couleurs",
    title: "Rituels & couleurs",
    summary: "Respiration, peinture libre et cercle de partage dans un cadre calme et lumineux.",
    detail:
      "Une proposition plus introspective pour celles et ceux qui cherchent à relier créativité, recentrage et douceur.",
    tags: ["Respiration", "Couleurs", "Ancrage"]
  },
  {
    slug: "jam-mouvement",
    title: "Jam & mouvement",
    summary: "Activation corporelle douce, création collective et énergie de groupe.",
    detail:
      "Un format pensé pour remettre le corps en circulation avant de passer au geste créatif et au temps de rencontre.",
    tags: ["Mouvement", "Collectif", "Élan"]
  }
] as const;

export const atelierAudience = [
  "Les personnes qui souhaitent souffler, créer et partager sans prérequis artistique.",
  "Les groupes à la recherche d'un moment chaleureux, esthétique et facile à rejoindre.",
  "Les lieux et marques qui veulent proposer une expérience premium, humaine et accessible."
] as const;

export const atelierPracticalInfo = [
  "Les éditions sont pensées pour des groupes à taille humaine afin de préserver la qualité du moment.",
  "Le lien Billetweb concentre les inscriptions du mois et peut être mis à jour sans toucher à tous les composants.",
  "Le matériel créatif et les détails pratiques sont précisés sur chaque annonce de réservation.",
  "Des formats privés, partenaires ou sur mesure peuvent être imaginés à Paris et selon le contexte."
] as const;

export const privateEventUseCases = [
  "Activation créative pour un lieu culturel, un café ou un espace hybride.",
  "Édition privée pour une marque lifestyle, beauté, bien-être ou art de vivre.",
  "Moment de cohésion pour une communauté, un collectif ou un événement de lancement."
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
      "Une édition dédiée à l'amour de soi, portée par la peinture, une playlist collaborative et une atmosphère afroféminine.",
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
      "Un atelier peinture guidé autour des affirmations positives, avec une place donnée au rythme, à la musique et à l'estime de soi."
  },
  {
    id: "rituels-couleurs-2025-09-20",
    title: "Rituels & couleurs",
    start: "2025-09-20T16:00:00+02:00",
    end: "2025-09-20T18:00:00+02:00",
    location: "Studio communautaire, Belleville, Paris, France",
    capacity: 10,
    excerpt: "Une parenthèse créative avec respiration, peinture libre et cercle de partage."
  },
  {
    id: "jam-mouvement-2025-06-14",
    title: "Jam & mouvement",
    start: "2025-06-14T11:00:00+02:00",
    end: "2025-06-14T13:30:00+02:00",
    location: "Maison de quartier, Paris 11e, France",
    capacity: 16,
    excerpt: "Une rencontre art et mouvement doux prolongée par un temps de brunch léger."
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

