import type { Session } from "@auth/solid-start";
import { createAsync, query } from "@solidjs/router";
import { Show, createEffect, createResource } from "solid-js";
import { getSession } from "~/lib/auth/session";

const secretData = query(async function secretData() {
	"use server";
	return "秘密のデータ";
}, "secretData");
export default function Page() {
	const [session] = createResource<Session | null>(getSession);
	const data = createAsync(() => secretData());
	createEffect(() => {
		console.log(session());
	});
	return (
		<div>
			account <br />
			<Show when={session()}>{(s) => s().accessToken}</Show>
			<Show when={data()}>{(d) => <>{d()}</>}</Show>
		</div>
	);
}
