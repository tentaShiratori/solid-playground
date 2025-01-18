import { defineConfig } from "@solidjs/start/config";
import suidPlugin from "@suid/vite-plugin";
import { macaronVitePlugin } from "@macaron-css/vite";
// import devtools from "solid-devtools/vite";

export default defineConfig({
  middleware: "./src/middleware.ts",
  server: {
    esbuild: { options: { target: "esnext" } },
  },
  vite: {
    plugins: [
      macaronVitePlugin(),
      suidPlugin(),
      // devtools({
      // 	/* features options - all disabled by default */
      // 	autoname: true, // e.g. enable autoname
      // }),
    ],
  },
});
