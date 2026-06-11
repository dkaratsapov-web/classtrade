import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CLASS TRADE — десктоп-вёрстка главной (база 1440px)
// base: './' — относительные пути ассетов, чтобы сайт работал и на под-пути
// GitHub Pages (https://<user>.github.io/classtrade/), и на корневом домене.
export default defineConfig({
  base: './',
  plugins: [react()],
})
