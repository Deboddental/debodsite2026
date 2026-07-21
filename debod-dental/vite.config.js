import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    historyApiFallback: true,
    allowedHosts: ['71f8916da8b13ef3-2-25-136-223.serveousercontent.com', '9336f0fbc6b875d1-2-25-136-223.serveousercontent.com'],
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
