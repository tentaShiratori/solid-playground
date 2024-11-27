import { Title } from "@solidjs/meta";
import { createAsync, query } from "@solidjs/router";
import Counter from "~/components/Counter";

const preload = query(async () => {
	console.log("preload");
	return (await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
		(response) => response.json(),
	)) as { userId: number; id: number; title: string; completed: boolean };
}, "todo");
const preload2 = query(async () => {
	console.log("preload2");
	return (await fetch("https://jsonplaceholder.typicode.com/todos/2").then(
		(response) => response.json(),
	)) as { userId: number; id: number; title: string; completed: boolean };
}, "todo2");
const getTodo = async () => {
	return preload();
};
const getTodo2 = async () => {
	return preload2();
};
export const route = {
	preload: () => {
		// getTodo2();
		return getTodo();
	},
};

export default function Home() {
	const data = createAsync(() => getTodo());
	return (
		<main>
			<Title>Hello World</Title>
			<h1>Hello world!</h1>
			<Counter />
			<p>
				Visit{" "}
				<a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
					start.solidjs.com
				</a>{" "}
				to learn how to build SolidStart apps.
			</p>
			{data()?.title}
			<Hoge />
		</main>
	);
}

const Hoge = () => {
	const data = createAsync(() => getTodo2());
	return <div>{data()?.title}</div>;
};
