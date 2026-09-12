# Chim Vine — Portfolio

Personal portfolio of Chim Vine, Full-Stack Developer (Phnom Penh, Cambodia).
Built with Nuxt 4, Vue 3, TypeScript and Tailwind CSS 4, prerendered to static HTML.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script              | What it does                             |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Dev server with HMR                      |
| `npm run generate`  | Prerender the site to `.output/public`   |
| `npm run preview`   | Serve the production build locally       |
| `npm run typecheck` | Type-check the whole project (`vue-tsc`) |

## Deployment

`npm run generate` outputs a fully static site in `.output/public` — deploy it to
Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host.

Set the canonical domain before deploying, so canonical URLs, Open Graph tags,
the sitemap and `robots.txt` point at the right host:

```bash
NUXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Structure

```
app/
├── assets/css/main.css     Design tokens (colours, radii, shadows) + base styles
├── components/
│   ├── contact/            Contact channels and the mailto form
│   ├── education/          Education card and its detail modal
│   ├── experience/         Timeline entry
│   ├── layout/             Header and footer
│   ├── sections/           One component per page section
│   └── ui/                 Reusable primitives (button, modal, tags, headings)
├── composables/            Scroll-spy, scroll lock, contact form logic
├── data/                   Site content as typed data (profile, experience, …)
├── layouts/                Page shell
├── pages/                  Routes — index.vue holds the SEO metadata
├── plugins/                v-reveal scroll animation directive
└── types/                  Shared TypeScript interfaces
public/                     Images and icons served as-is
```

Content lives in `app/data/*.ts` — updating a portfolio entry means editing data,
not markup.

## Notes

- Icons are bundled at build time from `@iconify-json/lucide` and
  `@iconify-json/simple-icons`; nothing is fetched from a CDN at runtime.
- Fonts are self-hosted by `@nuxt/fonts`.
- Images are optimised by `@nuxt/image` (WebP, responsive sizes) during the build.
- The contact form opens the visitor's mail client — the site has no backend.
