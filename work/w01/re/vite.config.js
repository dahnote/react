import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/react/work/w01/re/dist/assets/', // githubpage
  plugins: [react()],
});
