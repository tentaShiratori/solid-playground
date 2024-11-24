import type { Session } from "@auth/solid-start";

export const fetchSession = async () => {
	const res = await fetch("/api/auth/session");
	return (await res.json()) as Session | null;
};
