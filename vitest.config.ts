import path from "node:path";
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";
import suidPlugin from "@suid/vite-plugin";
import { macaronVitePlugin } from "@macaron-css/vite";

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
