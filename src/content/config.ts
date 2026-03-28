import { defineCollection, z } from "astro:content";
import { blogCategorySlugs } from "../data/blog";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(20),
    excerpt: z.string().min(20),
    publishDate: z.coerce.date(),
    category: z.enum(blogCategorySlugs),
    tags: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    readingTime: z.string().min(3)
  })
});

export const collections = { blog };

