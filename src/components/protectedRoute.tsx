import { getSession } from "@solid-mediakit/auth/client";
import { createAsync, query, redirect } from "@solidjs/router";
import { type Component, Show } from "solid-js";
import { getRequestEvent } from "solid-js/web";

const getUser = query(async () => {
	"use server";
	const event = getRequestEvent();
	const session = await getSession(event);
	if (!session) {
		throw redirect("/");
	}
	return session;
}, "media-user");

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function protectedRoute<T extends Record<string, any>>(
	Comp: Component<T>,
) {
	return (props: T) => {
		const session = createAsync(() => getUser());
		return <Show when={session()}>{(_) => <Comp {...props} />}</Show>;
	};
}
