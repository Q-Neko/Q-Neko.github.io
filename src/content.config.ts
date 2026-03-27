// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

const qpus = defineCollection({
  loader: glob({ base: './src/content/qpus', pattern: '**/*.json' }),
});

const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '**/*.json' }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { posts, partners, qpus };