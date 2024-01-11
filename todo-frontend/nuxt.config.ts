import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: [
    '@pinia/nuxt',
  ],
  pages: true
})
