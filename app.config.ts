import { defineConfig } from "@solidjs/start/config";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
	middleware: "./src/middleware.ts",
	vite: {
		build: {
			target: "esnext",
		},
		plugins: [suidPlugin()],
	},
});
