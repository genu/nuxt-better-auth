export default defineNuxtConfig({
  modules: ["../src/module"],

  routeRules: {
    "/spa": { ssr: false },
  },

  betterAuthUtils: {
    redirectTo: "/login",
  },
})
