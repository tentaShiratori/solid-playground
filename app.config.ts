import { defineConfig } from "@solidjs/start/config";
import suidPlugin from "@suid/vite-plugin";
// import devtools from "solid-devtools/vite";

export default defineConfig({
	// middleware: "./src/middleware.ts",
	server: {
		esbuild: { options: { target: "esnext" } },
	},
	vite: {
		plugins: [
			suidPlugin(),
			// devtools({
			// 	/* features options - all disabled by default */
			// 	autoname: true, // e.g. enable autoname
			// }),
		],
	},
});
