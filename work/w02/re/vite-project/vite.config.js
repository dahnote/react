import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    base: '/react/work/w02/re/vite-project/dist/',
    plugins: [react()],
});
