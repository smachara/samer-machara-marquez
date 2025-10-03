import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia 'YOUR_REPO_NAME' por el nombre de tu repositorio en GitHub.
  // Por ejemplo, si tu repositorio se llama 'cv-react', la línea debería ser:
  // base: '/cv-react/',
  base: '/samer-machara-marquez/', 
})
