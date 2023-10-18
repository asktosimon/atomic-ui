import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      external: ['react', 'react/jsx-runtime'],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
    },
  },
});
