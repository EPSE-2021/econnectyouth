import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const REPO_NAME = "/econnectyouth";

export default defineConfig(({ command }) => ({
  base: command === "build" ? REPO_NAME : "/",

  plugins: [react()],

  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
}));
