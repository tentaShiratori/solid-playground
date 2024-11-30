import { useAuth } from "@solid-mediakit/auth/client";
import { onMount } from "solid-js";

export default function Page() {
	const auth = useAuth();
	onMount(() => {
		auth.signIn("auth0", { callbackUrl: window.location.origin });
	});
	return <div>Loading...</div>;
}
