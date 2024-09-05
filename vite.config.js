import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/viktorinkov-nike-demo/',  // Correct base path for GitHub Pages
  plugins: [react()],
})
