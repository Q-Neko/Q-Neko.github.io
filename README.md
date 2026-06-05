> [!Warning]
> The site is in active development. Some information is placeholder / wrong.

# Q-Neko Website

The public website for the Q-Neko project (Nippon-Europe Quantum Koraborēshon) — a Horizon Europe / EuroHPC JU / Japan SIP funded collaboration advancing hybrid HPC+AI+QC.

<img width="1200" height="691" alt="image" src="https://github.com/user-attachments/assets/417c8a25-227c-4c6d-9da9-d38f52ab664f" />


Built with [Astro 6](https://astro.build), Tailwind CSS v4, React, and Pagefind for static search.

## Quick start

Requires Node.js ≥ 22.12.0. It is recommended to use [nvm linux/mac](https://github.com/nvm-sh/nvm#installing-and-updating) or [nvm windows](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to install node.

Once nvm is installed run:

```sh
nvm install 24
nvm use v24
```

> [!Note]
> `nvm use` only applies to the current shell. Run `nvm use v24` again in any new terminal before `npm run dev`/`build`.

Then clone this repository. If you have not done so already set up an ssh key for github: [generate key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows), [add to account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```sh
git clone git@github.com:Q-Neko/Q-Neko.github.io.git
```

and navigate to the directory

```sh
cd Q-Neko.github.io
```

and run:

```sh
npm install
npm run dev        # dev server at localhost:4321 to preview and see live changes
npm run build      # production build to ./dist/. Builds production-ready assets
npm run preview    # preview the production build locally, no live changes
```

## Project structure

```
src/
├── assets/            # Images and static assets imported by components
├── components/
│   ├── layout/        # Nav, NavMobile (React), Footer, LanguageSwitcher, Banner, Newsletter
│   ├── mainPage/      # Hero, Mission, Partners, Funding, RecentActivity
│   ├── pages/         # Shared page-body components (used by both EN and JA routes)
│   ├── blog/          # PostContent, EventContent (render a single news post / event)
│   └── ui/            # EntryCard, PartnerCard, Pagination, ContactFormCard, NewsletterFormCard, PreviousNewsletters
├── content/
│   ├── news/          # Markdown news posts, split by locale (en/, ja/)
│   ├── events/        # Markdown event entries, split by locale (en/, ja/)
│   ├── results/       # JSON results entries, split by locale (en/, ja/)
│   ├── media/         # Media Corner: press-releases.json, media-coverage.json (language-neutral)
│   └── partners/      # partners.json
├── content.config.ts  # Astro content collection schemas
├── i18n/
│   ├── types.ts       # Translations interface - add keys here first
│   ├── en.ts          # English strings
│   ├── ja.ts          # Japanese strings (placeholders until translated)
│   └── index.ts       # useTranslations(locale) helper
├── layouts/           # Layout.astro, PageLayout.astro
├── styles/            # Global Tailwind / CSS
├── pages/             # English routes (no prefix)
│   ├── index.astro
│   ├── 404.astro
│   ├── news.astro
│   ├── news/[title].astro
│   ├── events.astro
│   ├── events/[slug].astro
│   ├── results.astro
│   ├── results/[slug].astro
│   ├── media.astro
│   ├── newsletter.astro
│   ├── contact.astro
│   ├── privacy-policy.astro
│   ├── code-of-conduct.astro
│   └── search/
└── pages/ja/          # Japanese routes (/ja/...)
    └── (mirrors pages/ structure)
```

## Internationalization (i18n)

The site supports English (`/`) and Japanese (`/ja/`) via Astro's built-in i18n routing with `prefixDefaultLocale: false`.

**To add or update a translated string:**

1. Add the key to `src/i18n/types.ts` (TypeScript will error on any locale missing the key)
2. Add the English value to `src/i18n/en.ts`
3. Add the Japanese value (or placeholder) to `src/i18n/ja.ts`

**To use translations in a component:**

```astro
---
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<h1>{t.hero.headline1}</h1>
```

Locale-aware hrefs use a `base` prefix:

```ts
const base = lang === "ja" ? "/ja" : "";
// then: href={`${base}/news`}
```

## Navigation & footer links

Both the nav and footer are **data-driven** — you add or reorder links by editing data, not markup.

- **Top nav** ([Nav.astro](src/components/layout/Nav.astro)): edit the `navLinks` array near the top of the component. Each entry is `{ label, href }`; labels come from `t.nav.*`. The mobile nav reuses the same array.
- **Footer** ([Footer.astro](src/components/layout/Footer.astro)): the footer reads everything from `t.footer` in the locale files — the `.astro` file just loops, so you never touch it to add a link:
  - `footer.columns` — array of `{ heading, links: [{ label, href }] }`. Add a link by appending to a column's `links`; add a whole column by appending to `columns`. Mirror the change in both `en.ts` and `ja.ts`.
  - `footer.legalLinks` — array of `{ label, href }` for the legal section (privacy, code of conduct, cookies).
  - `footer.funderLogos` — array of `{ src, alt }`; `src` is a `public/` path (e.g. `/logos/funders/eurohpc.png`), `alt` is translatable.

## Content collections

All collections are defined in [src/content.config.ts](src/content.config.ts):

| Collection      | Format                | Localization                          | Section below |
| --------------- | --------------------- | ------------------------------------- | ------------- |
| `news`          | Markdown, one file/post | per-locale dir (`en/`, `ja/`)       | [News](#news) |
| `events`        | Markdown, one file/event | per-locale dir (`en/`, `ja/`)      | [Events](#events) |
| `results`       | JSON, one file/result | per-locale dir (`en/`, `ja/`)         | [Results](#results) |
| `pressReleases` | single JSON array     | language-neutral (shared EN/JA)       | [Media Corner](#media-corner) |
| `mediaCoverage` | single JSON array     | language-neutral (shared EN/JA)       | [Media Corner](#media-corner) |
| `brandAssets`   | auto-discovered files | language-neutral                      | [Media Corner](#media-corner) |
| `partners`      | single JSON file      | language-neutral                      | [Partners](#partners) |

For `news`, `events`, and `results`, each collection is split into `en/` and `ja/` subdirectories; **language is determined by the directory**, not by frontmatter. Each language's paginated listing only shows entries from its own subdirectory.

### News

Markdown files in `src/content/news/{en,ja}/`. Frontmatter:

```yaml
---
title: "Post title"
slug: "url-slug"
date: 2026-01-01
description: "Short description shown in cards"
author: "Author name"
type: "News"                 # displayed as the card meta label
tags: ["tag1", "tag2"]
image: "/news/foo/cover.jpg" # optional
---
```

### Events

Markdown files in `src/content/events/{en,ja}/`. Frontmatter:

```yaml
---
title: "Event title"
slug: "url-slug"
description: "Short description shown in cards"
startDate: 2026-01-20
endDate: 2026-01-22
location: "Tokyo, Japan"     # optional, shown as the card meta label
image: "/placeholder-news.svg" # optional
---
```

### Results

JSON files in `src/content/results/{en,ja}/`. Each entry points at a PDF that lives under `public/files/results/`:

```json
{
  "title": "D1.1 — Collaboration Plan",
  "type": "deliverable",
  "date": "2028-02-15",
  "pdf": "d1.1-collaboration-plan.pdf"
}
```

`type` must be one of: `deliverable`, `milestone`, `publication`, `software`, `presentation`, `poster`. The card meta label is the localized version of this type pulled from `t.pageContent.results.filters[type]`. `image` is optional.

## Media Corner

The Media Corner page ([/media](src/pages/media.astro), rendered by [MediaPage.astro](src/components/pages/MediaPage.astro)) has three tabs, each backed by its own collection. Unlike news/events/results, **Media Corner content is language-neutral** — the same real-world items (articles, releases, logos) appear on both the EN and JA pages, so there are no `en/`/`ja/` subdirectories. Headlines stay in their original language; the `language` field labels which that is.

### Press releases & media coverage

Two flat JSON arrays in `src/content/media/`:

- `press-releases.json` → **Press releases** tab (our own announcements)
- `media-coverage.json` → **Media coverage** tab (external articles about Q-Neko)

Both use the same item shape. To add an item, append an object to the array:

```json
{
  "id": "hpcwire-new-era",
  "title": "Q-Neko Project Drives EU-Japan Quantum Collaboration Into a New Era",
  "source": "HPCwire",
  "language": "EN",
  "date": "2026-02-11",
  "url": "https://www.hpcwire.com/off-the-wire/q-neko-project-drives-eu-japan-quantum-collaboration-into-a-new-era/",
  "order": 0
}
```

| Field      | Required | Notes                                                                                  |
| ---------- | -------- | -------------------------------------------------------------------------------------- |
| `id`       | yes      | Unique within the file (kebab-case). Used as the collection entry id.                  |
| `title`    | yes      | Headline, in its original language.                                                    |
| `source`   | yes      | Publication / outlet name (e.g. `CSC`, `HPCwire`).                                      |
| `language` | yes      | Original language of the piece as a short code (e.g. `EN`, `FI`, `JA`).                |
| `url`      | yes      | Full URL — must be a valid absolute URL. Opens in a new tab.                            |
| `date`     | no       | `YYYY-MM-DD`. Omit for undated entries — they sort last and the date is hidden.         |
| `order`    | no       | Tie-breaker among entries with the same/no date (ascending). Defaults to `0`.          |

Items are sorted newest-first by `date`, then by `order`. The card meta line is built as `source · date · language` (date/language omitted when absent). An empty array shows the localized "coming soon" message.

### Brand assets (logos)

The **Communication materials** tab lists downloadable logos. These are **auto-discovered** from [public/logos/media/](public/logos/media/) by the `brandAssets` loader — there is **no manifest to edit**.

To add a logo: drop a `.png`, `.svg`, `.jpg`/`.jpeg`, or `.webp` file into `public/logos/media/`. It appears automatically, sorted alphabetically by filename, and the filename is shown as the label (so name files sensibly, e.g. `Q-Neko-logo-text.png`).

The "Download all" button serves a pre-built ZIP at `public/logos/media/qneko-logo-pack.zip`. This is **not** generated — when you add or change logos, regenerate the ZIP and commit it, otherwise it will be out of sync with the individual files. (The ZIP itself is skipped from the on-page grid since the grid filters to image extensions only.)

The press-contact email shown above the tabs comes from `t.pageContent.media.pressEmail` in the locale files.

## Partners

Partner logos on the homepage ([Partners.astro](src/components/mainPage/Partners.astro)) come from a single [src/content/partners/partners.json](src/content/partners/partners.json) (language-neutral). Each entry:

```json
{
  "country": "Finland",
  "region": "EU",
  "name": "CSC",
  "long_name": "CSC - IT Center for Science",
  "logo": "/logos/Roll-up-logos/csc_se.svg"
}
```

`logo` is a URL path into `public/` (logos live under `public/logos/Roll-up-logos/`). To add a partner, drop the logo file in that folder and append an entry to the `partners` array.

## Recent Activity section

[src/components/mainPage/RecentActivity.astro](src/components/mainPage/RecentActivity.astro) pulls the newest items from the enabled collections and shows them on the homepage. To hide a source, remove it from the `ENABLED_SOURCES` array near the top of that file:

```ts
const ENABLED_SOURCES = [
  "news",
  "events",
  "results",
] as const satisfies ReadonlyArray<"news" | "events" | "results">;
```

Entries from all enabled sources are merged, sorted by date (descending), and the top `MAX_ITEMS` (default 4) are rendered. Each enabled source also gets its own "view all" button linking to the corresponding listing page.

## Images and static assets

There are two places to put images, and the right one depends on how you'll reference it.

### [public/](public/) — referenced by URL path

Files under `public/` are served as-is at the same path (e.g. `public/news/foo/cover.jpg` → `/news/foo/cover.jpg`). Use this for anything referenced by a **string path**, including all content collection `image:` fields and any `<img src="/...">` in Markdown bodies or page components.

Conventions in use:

| Content                     | Location                       | Example                                          |
| --------------------------- | ------------------------------ | ------------------------------------------------ |
| News post images            | `public/news/<slug>/`          | `image: "/news/introducing-q-neko/staytuned.jpg"` |
| Event images                | `public/events/<slug>/`        | `image: "/events/kickoff-workshop-2026/cover.jpg"` |
| Result PDFs                 | `public/files/results/`        | `"pdf": "d1.1-collaboration-plan.pdf"` (prefixed with `/files/results/` automatically) |
| Result images (optional)    | `public/files/results/`        | `"image": "/files/results/kickoff-poster.jpg"`   |
| Partner / funder logos      | `public/logos/Roll-up-logos/`, `public/logos/funders/` | see [Partners](#partners)        |
| Media Corner logos (ZIP too)| `public/logos/media/`          | auto-listed on /media — see [Media Corner](#media-corner) |
| Generic card fallback       | `public/placeholder-news.svg`  | use when no real image is available              |

Files under `public/` are **not** processed or optimized — pre-size and pre-compress them before committing. Prefer `.jpg` for photos, `.svg` for logos/icons.

### [src/assets/](src/assets/) — imported into components

Use `src/assets/` for images you `import` into an `.astro` or `.tsx` file. Astro processes these (hashing, optimization, responsive variants when used with `<Image>`). Current usage is the project logo across [Hero.astro](src/components/mainPage/Hero.astro), [Nav.astro](src/components/layout/Nav.astro), and [Footer.astro](src/components/layout/Footer.astro):

```astro
---
import qnekoLogo from "../../assets/qneko_nobg_notext.png";
---
<img src={qnekoLogo.src} alt="Q-Neko" />
```

Rule of thumb: if the image is referenced from a content collection entry or a string path, put it in `public/`. If it's imported by a component, put it in `src/assets/`.

## Adding a new page

1. Create `src/components/pages/MyPage.astro` with `lang` prop and your content
2. Create `src/pages/my-page.astro` (EN) and `src/pages/ja/my-page.astro` (JA) as thin wrappers:

```astro
---
import PageLayout from "../../layouts/PageLayout.astro";
import MyPage from "../../components/pages/MyPage.astro";
const lang = Astro.currentLocale ?? "en";
---
<PageLayout title="My Page"><MyPage lang={lang} /></PageLayout>
```

3. Add the nav link to `src/components/layout/Nav.astro`
4. Add the page title string to the `Translations` interface and both locale files
