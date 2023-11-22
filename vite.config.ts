import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const pathSrc = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/styles/breakpoints.scss";` },
    },
  },
});
