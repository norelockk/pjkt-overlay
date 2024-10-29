import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'iife',
        manualChunks: () => 'overlay',
        inlineDynamicImports: false,
      }
    },
    assetsInlineLimit: 1000 * 1000000,
  },
  plugins: [vue(), viteSingleFile({
    useRecommendedBuildConfig: false
  })],
})
