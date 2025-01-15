import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // @ts-expect-error - vite doesn't have types for this yet
  test: {
    globals: true,
    environment: "jsdom",
  },
});
