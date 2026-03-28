import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { activeSiteUrl } from "../config/site";
import { sortBlogEntries } from "../lib/blog";

export async function GET(context: { site: string | undefined }) {
  const posts = sortBlogEntries(await getCollection("blog"));

  return rss({
    title: "Journal Masoda",
    description: "Le flux éditorial du journal Masoda.",
    site: context.site ?? activeSiteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`
    }))
  });
}
