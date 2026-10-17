import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Configuração para GitHub Pages
// Se o repositório não for "username.github.io", use o nome do repo como base
const base = process.env.NODE_ENV === 'production' ? '/PetDanissaura3D/' : '/';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
