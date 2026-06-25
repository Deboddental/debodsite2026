import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { resolve } from 'path'
import { getAllRoutes } from './scripts/routes.mjs'

const allRoutes = getAllRoutes()
console.log(`📄 Sitemap: ${allRoutes.length} routes`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://deboddentalclinic.com',
      dynamicRoutes: allRoutes,
      readable: true,
      generateRobotsTxt: false, // robots.txt is maintained by hand in public/
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/react-markdown') || id.includes('node_modules/remark-gfm')) {
            return 'markdown'
          }
          if (id.includes('node_modules/gsap')) {
            return 'animations'
          }
        },
      },
    },
  },
})
