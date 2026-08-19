// Base path must match the GitHub repo name for GitHub Pages project-site routing.
// If the repo is renamed, update `base` here too (and the basename in src/main.jsx).
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Tutypackers/',
  build: {
    assetsInlineLimit: 0,
    sourcemap: false,
  },
});
