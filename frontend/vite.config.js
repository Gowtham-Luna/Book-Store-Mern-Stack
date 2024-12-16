import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', rollupOptions: { input: '/path/to/your/index.html', // Specify the path to your index.html 
    }}
})