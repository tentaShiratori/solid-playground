import { signOut } from "@auth/solid-start/client";
import { useAuth } from "@solid-mediakit/auth/client";
import { onMount } from "solid-js";

export default function Page() {
	const auth = useAuth();
	onMount(() => {
		auth.signOut({ redirectTo: "/" });
	});
	return <div>Loading...</div>;
}
