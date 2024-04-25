import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //     "@assets": path.resolve(__dirname, "./src/assets"),
  //     "@components": path.resolve(__dirname, "./src/components"),
  //   },
  // },
  server: { https: true },

  plugins: [react(), mkcert()],
});
