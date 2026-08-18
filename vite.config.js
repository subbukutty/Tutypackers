// Base path is set to /tutypackers-website/ so the build works under GitHub Pages user-site routing.
// When you create the GitHub repo, keep this name. If you rename it, update `base` here too.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tutypackers-website/',
  build: {
    assetsInlineLimit: 0,
    sourcemap: false,
  },
});
