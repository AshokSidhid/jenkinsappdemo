import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jenkinsappdemo/',
    server: {
    port: 5888 // Change this to your desired port
  }
})
