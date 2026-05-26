// @ts-check
import { defineConfig } from 'astro/config';

//TODO: remove astro-noindex before launch, and make sure to set up proper SEO metadata for all pages
import astroNoIndex from "astro-noindex";

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    pagefind(),
    astroNoIndex({
      allow: []
    })
  ],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});