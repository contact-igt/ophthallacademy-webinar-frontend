import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback – always serve index.html for unknown routes (e.g. /thank-you)
    historyApiFallback: true,
  },
})
