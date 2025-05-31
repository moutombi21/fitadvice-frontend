// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import unpluginTailwindcss from 'unplugin-tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    unpluginTailwindcss.vite(), // ✅ Correct usage
  ],
});