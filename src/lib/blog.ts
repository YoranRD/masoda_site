import type { CollectionEntry } from "astro:content";

export const sortBlogEntries = (entries: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] =>
  [...entries].sort((left, right) => right.data.publishDate.getTime() - left.data.publishDate.getTime());

export const getFeaturedEntries = (
  entries: CollectionEntry<"blog">[],
  limit = 3
): CollectionEntry<"blog">[] => {
  const featuredEntries = sortBlogEntries(entries).filter((entry) => entry.data.featured);
  if (featuredEntries.length >= limit) {
    return featuredEntries.slice(0, limit);
  }

  const seenIds = new Set(featuredEntries.map((entry) => entry.id));
  const remainingEntries = sortBlogEntries(entries).filter((entry) => !seenIds.has(entry.id));
  return [...featuredEntries, ...remainingEntries].slice(0, limit);
};

