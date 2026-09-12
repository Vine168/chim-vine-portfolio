import tailwindcss from '@tailwindcss/vite'
import { contactChannels } from './app/data/contact'
import { experiences } from './app/data/experience'
import { profile } from './app/data/profile'
import { skillGroups } from './app/data/skills'

// Icon names that come from data files are invisible to the static scanner,
// so they are collected here and pre-bundled with the scanned ones.
const dataIcons = [
  ...profile.facts.map((fact) => fact.icon),
  ...contactChannels.map((channel) => channel.icon),
  // Skills that ship their logo as a file in public/ have no icon to bundle.
  ...skillGroups.flatMap((group) => group.skills.flatMap((skill) => skill.icon ?? [])),
  ...experiences.flatMap((item) => item.icon ?? []),
]

// Set NUXT_PUBLIC_SITE_URL in the deployment environment to the real domain.
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://chim-vine-portfolio.vercel.app'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  // Folders group components by role; the component name stays the file name
  // (HeroSection, not SectionsHeroSection).
  components: [{ path: '~/components', pathPrefix: false }],

  vite: {
    plugins: [tailwindcss()],
  },

  site: {
    url: siteUrl,
    name: 'Chim Vine — Full-Stack Developer',
  },

  runtimeConfig: {
    public: { siteUrl },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: siteUrl },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#059669' },
      ],
    },
  },

  // Icons ship inside the bundle: no Iconify API calls, no icon endpoint,
  // which also means they render in the prerendered HTML.
  icon: {
    mode: 'svg',
    provider: 'none',
    clientBundle: { scan: true, icons: dataIcons, sizeLimitKb: 256 },
  },

  fonts: {
    families: [{ name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] }],
  },

  image: {
    format: ['webp'],
    quality: 80,
    densities: [1, 2],
  },

  // Single-page site: prerender to static HTML so crawlers get full markup.
  nitro: {
    prerender: { crawlLinks: true, routes: ['/', '/404.html'] },
  },

  typescript: {
    strict: true,
  },
})
