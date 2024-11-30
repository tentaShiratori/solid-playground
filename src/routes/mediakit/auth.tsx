import { useAuth } from "@solid-mediakit/auth/client";
import { Show } from "solid-js";

export default function Page() {
  const auth = useAuth();
  return (
    <Show
      when={auth.status() === "authenticated" && auth.session()}
      fallback={<div>{auth.status()}</div>}
    >
      {(session) => <div>Hey there {session().user?.name}</div>}
    </Show>
  );
}
