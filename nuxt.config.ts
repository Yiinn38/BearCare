import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true }
})
