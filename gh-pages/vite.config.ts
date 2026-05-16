import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "node:path";

// Change `base` to '/<repo-name>/' for project pages,
// or '/' for a user/organization site (h204812.github.io).
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});