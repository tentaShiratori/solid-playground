import path from "node:path";
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [solid()],
	resolve: {
		conditions: ["development", "browser"],
	},
	test: {
		globals: true,
		setupFiles: ["src/test/setup.ts"],
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
});
