import type { Session } from "@auth/solid-start";
import { createAsync } from "@solidjs/router";
import { Show, createEffect, createSignal, onMount } from "solid-js";
import { fetchSession } from "~/lib/auth/client";

export default function Page() {
	const [session, setSession] = createSignal<Session | null>(null);
	onMount(async () => {
		setSession(await fetchSession());
	});
	createEffect(() => {
		console.log(session());
	});
	return (
		<div>
			account <br />
			<Show when={session()}>{(s) => s().accessToken}</Show>
		</div>
	);
}
