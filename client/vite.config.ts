import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve'
  const isProd = mode === 'production'
  
  return {
    plugins: [react(), tailwindcss()],
    base: isDev ? '/' : './',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
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
  }
})