import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://hector1489.github.io/kukyEspacial",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
