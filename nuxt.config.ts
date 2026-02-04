// https://nuxt.com/docs/getting-started/configuration
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // Enable static site generation for Vercel
  ssr: false,
  
  // Generate static files
  nitro: {
    preset: 'static'
  }
})
