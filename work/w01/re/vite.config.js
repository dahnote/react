import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: 'react/work/01/re/dist/', // githubpage
  plugins: [react()],
});
