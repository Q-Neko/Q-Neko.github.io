// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection

//TODO: Right now language decided by the lang field in frontmatter. However maybe would be smarter to separate content 
// by language into different folders (e.g. news/en, news/ja) and decide language based on that instead? 
const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    lang: z.enum(["en", "ja"]).default("en"),
  }),
});

const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '**/*.json' }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { news, partners };