import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permet d'écouter sur toutes les interfaces
    port: 5173   // Définit le port sur 5173
  }
});