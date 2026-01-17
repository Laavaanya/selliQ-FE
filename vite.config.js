import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // optional: allows .sidebarClass to be imported as styles.sidebarClass
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:color";`, // optional global Sass utils
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // optional alias for clean imports
    },
  },
  server: {
    port: 5173, // customize your local dev port
    open: true, // auto open browser
  },
});
