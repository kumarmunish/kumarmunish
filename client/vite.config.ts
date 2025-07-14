import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// GitHub Pages specific configuration
// If your repository is at https://yourusername.github.io/repository-name
// Change the base to '/repository-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@assets': path.resolve(__dirname, './assets')
    }
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
})
