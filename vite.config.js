import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        attorneys: resolve(__dirname, 'attorneys/index.html'),
        'labor-law': resolve(__dirname, 'labor-law/index.html'),
        'criminal-law': resolve(__dirname, 'criminal-law/index.html'),
        'employment-law': resolve(__dirname, 'employment-law/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  }
})
