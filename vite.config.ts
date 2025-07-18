import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/vitest-setup.ts"],
  },
  server: {
    port: 3001,
  },
});
