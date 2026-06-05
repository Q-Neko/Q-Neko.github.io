// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';
import { readdirSync } from 'node:fs';

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

// Media corner. These items are language-neutral (article headlines stay in
// their original language and the same real-world items appear on both the EN
// and JA pages), so each is a single JSON array file rather than per-language
// folders. `language` is the original language of the piece (e.g. "FI", "EN");
// `date` is optional so undated entries can be added and filled in later.
const mediaItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.string(),
  language: z.string(),
  date: z.coerce.date().optional(),
  url: z.string().url(),
  order: z.number().default(0),
});

const pressReleases = defineCollection({
  loader: file('./src/content/media/press-releases.json'),
  schema: mediaItemSchema,
});

const mediaCoverage = defineCollection({
  loader: file('./src/content/media/media-coverage.json'),
  schema: mediaItemSchema,
});

// Downloadable logo / brand assets. Auto-discovered from `public/logos/media`:
// to add a logo, just drop the file in that folder — no entry to maintain here.
// The page shows the filename, so no descriptions/translations are needed.
const LOGO_DIR = './public/logos/media';
const brandAssets = defineCollection({
  loader: {
    name: 'brand-assets-dir',
    load: async ({ store, parseData }) => {
      store.clear();
      const files = readdirSync(LOGO_DIR)
        .filter((f) => /\.(png|svg|jpe?g|webp)$/i.test(f))
        .sort();
      for (let i = 0; i < files.length; i++) {
        const id = files[i];
        const data = await parseData({ id, data: { file: files[i], order: i } });
        store.set({ id, data });
      }
    },
  },
  schema: z.object({
    file: z.string(),
    order: z.number().default(0),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { news, events, results, partners, pressReleases, mediaCoverage, brandAssets };
