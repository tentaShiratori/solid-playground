import path from "node:path";
import suidPlugin from "@suid/vite-plugin";
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid() as never, suidPlugin() as never],
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
