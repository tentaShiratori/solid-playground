import { signIn } from "@auth/solid-start/client";
import { onMount } from "solid-js";

export default function Page() {
  onMount(() => {
    signIn("auth0", { callbackUrl: window.location.origin });
  });
  return <div>Loading...</div>;
}
