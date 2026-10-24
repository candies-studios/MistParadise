import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the built site works from any folder,
  // e.g. https://<user>.github.io/MistParadise/ as well as a root domain.
  base: './',
  // Build into docs/ so GitHub Pages can serve it directly (Settings → Pages → main /docs).
  build: { outDir: 'docs', emptyOutDir: true },
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
