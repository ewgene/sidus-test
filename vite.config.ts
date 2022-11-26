import { defineConfig, normalizePath } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),    
    VitePluginFonts({
      google: {
        families: ['Average Sans'],
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true
    },
    cors: { origin: "*" }
  },
  resolve: {
    alias: {
      '@': normalizePath(path.resolve(__dirname, 'src')),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${normalizePath(path.resolve(__dirname, 'src/global.scss'))}';`
      }
    }
  }
})
