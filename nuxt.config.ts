// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],
  site: {
    url: 'http://localhost:3000',
  },
  sitemap: {
    urls: [
      '/blog'
    ],
    sources: [
      '/api/__sitemap__/blog'
    ]
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme:{
            default: 'min-light',
            dark: 'min-dark',
          },
        },
      }
    }
  },
  colorMode: {
    classSuffix: '',
  },
    nitro: {
    prerender: {
      routes: [
        '/sitemap.xml'
      ]
    }
  },
})
