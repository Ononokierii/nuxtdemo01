// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
    },
    ignores: [
      "hidden", // any file or folder that contains the word "hidden"
      "/hidden/", // any folder that exactly matches the word "hidden"
      "/path/to/file", // any file path matching "/path/to/file"
      "\\.bak$", // any file with the extension ".bak"
    ],
  },
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
