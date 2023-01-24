import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "https://main--effulgent-cuchufli-c1d7d6.netlify.app/",
  },
});
