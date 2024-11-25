import { defineConfig } from "@solidjs/start/config";
import suidPlugin from "@suid/vite-plugin";

export default defineConfig({
	middleware: "./src/middleware.ts",
	server: {
		esbuild: { options: { target: 'esnext' } },
	},
	vite: {
		plugins: [suidPlugin()],
	},
});
