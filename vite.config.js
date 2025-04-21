import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // <-- Remplace `@vitejs/plugin-react` par `@vitejs/plugin-react-swc`

export default defineConfig({
  plugins: [react()],
})
