import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Assuming 'lovable-tagger' is a necessary development dependency
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ---- ADD THIS LINE ----
  base: '/peter-test-1/',
  // -----------------------
  server: { // This only affects your local development server
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger only runs in development mode based on your logic
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));