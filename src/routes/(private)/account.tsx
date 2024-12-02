import type { Session } from "@auth/solid-start";
import { Show, createEffect, createResource } from "solid-js";
import { getSession } from "~/lib/auth/session";

export default function Page() {
  const [session] = createResource<Session | null>(getSession);
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
