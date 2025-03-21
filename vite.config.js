import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  server: {
    port: 5178, // Change this to your desired port
    strictPort: true, // Ensures Vite fails if the port is unavailable
  },
  build: {
    outDir: "dist", // Ensures the build goes to the right place
  },
});
