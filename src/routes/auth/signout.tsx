import { signOut } from "@auth/solid-start/client";
import { onMount } from "solid-js";

export default function Page() {
	onMount(() => {
		signOut({ callbackUrl: window.location.origin });
	});
	return <div>Loading...</div>;
}
