// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
//
// Language is encoded in the directory: each collection has `en/` and `ja/`
// subdirectories, e.g. `src/content/news/en/foo.md`. Routes filter entries by
// `entry.id` starting with `"en/"` or `"ja/"` - no `lang` frontmatter needed.

const news = defineCollection({
  loader: glob({
    base: './src/content/news',
    pattern: '{en,ja}/**/*.{md,mdx}',
    generateId: ({ entry }) => entry.replace(/\.[^./]+$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({
    base: './src/content/events',
    pattern: '{en,ja}/**/*.{md,mdx}',
    generateId: ({ entry }) => entry.replace(/\.[^./]+$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    location: z.string().optional(),
    image: z.string().optional(),
  }),
});

const RESULT_TYPES = ["deliverable", "milestone", "publication", "software", "presentation", "poster"] as const;

const results = defineCollection({
  loader: glob({
    base: './src/content/results',
    pattern: '{en,ja}/**/*.json',
    generateId: ({ entry }) => entry.replace(/\.[^./]+$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(RESULT_TYPES),
    date: z.coerce.date(),
    pdf: z.string(),
    image: z.string().optional(),
  }),
});

const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '**/*.json' }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { news, events, results, partners };
