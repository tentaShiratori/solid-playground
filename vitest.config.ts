import path from "node:path";
import { macaronVitePlugin } from "@macaron-css/vite";
import suidPlugin from "@suid/vite-plugin";
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid(), macaronVitePlugin()],
  resolve: {
    conditions: ["development", "browser"],
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/test/setup.ts"],
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
