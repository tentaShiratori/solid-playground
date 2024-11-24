import { redirect } from "@solidjs/router";
import { createMiddleware } from "@solidjs/start/middleware";
import { getSession } from "~/lib/auth/server";

export default createMiddleware({
	onRequest: [
		async (event) => {
			const url = new URL(event.request.url);
			if (url.pathname === "/account") {
				const session = await getSession(event.request);
				if (!session) {
					return redirect("/about");
				}
			}
		},
	],
});