import { Title } from "@solidjs/meta";
import { onMount, Show } from "solid-js";
import Counter from "~/components/Counter";
import { createAsync, query } from "@solidjs/router";

type User = { id:string,firstName:string,lastName:string };

const getUser = query(async () => {
	console.log("Fetching user...");
	const response = await fetch("https://example.com/user");
	return (await response.json()) as User;
}, "user");

export const route = {
	preload: () => getUser(),
};

export default function Home() {
		const user = createAsync(() => getUser());
	return (
		<main>
			<Title>Hello World</Title>
			<h1>Hello world!</h1>
			<Counter />
			<Show when={user()}>{(u)=>{
				return <p>User: {u().firstName} {u().lastName}</p>
			}}</Show>
			<p>
				Visit{" "}
				<a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
					start.solidjs.com
				</a>{" "}
				to learn how to build SolidStart apps.
			</p>
		</main>
	);
}
