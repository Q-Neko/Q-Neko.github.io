// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import pagefind from "astro-pagefind";

import logoZip from "./src/integrations/logoZip.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://q-neko.com',

  integrations: [
    react(),
    pagefind(),
    logoZip(),
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