import { authMiddleware } from "@solid-mediakit/auth";
import { createMiddleware } from "@solidjs/start/middleware";
// import { getSession } from "~/lib/auth/session";
import { authOption } from "./lib/auth/option";
import { redirect } from "@solidjs/router";

// export default createMiddleware({
// 	onRequest: [
// 		async (event) => {
// 			const url = new URL(event.request.url);
// 			if (url.pathname === "/account") {
// 				const session = await getSession();
// 				if (!session) {
// 					return redirect("/about");
// 				}
// 			}
// 		},
// 	],
// });

export default createMiddleware({
  onRequest: [
    authMiddleware(true, authOption), // The session will always be prefetched
  ],
});
