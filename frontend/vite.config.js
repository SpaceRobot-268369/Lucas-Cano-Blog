import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,
    port: 5173,                       // 5173 is Vite’s default
    proxy: {
      // ▶ every request that starts with /backend will be forwarded
      '/backend': {
        target: 'http://localhost:3000',  // your Express port
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/backend/, '') // ⬅️ this removes `/backend` prefix
      }
    }
}
})
