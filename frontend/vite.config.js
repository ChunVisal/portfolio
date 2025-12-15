import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()
    , tailwindcss(),
    sitemap({
      hostname: "https://chunvisal.pro",
      routes: [
        "/",
        "/mycv",
        "/project/1",
        "/project/2",
        "/project/3",
      ],
    }),
  ],
})
