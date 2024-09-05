import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/viktorinkov-nike-demo/',  // Base URL for GitHub Pages
  plugins: [react()],
})
