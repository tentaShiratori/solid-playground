import { Title } from "@solidjs/meta";
import { type ParentProps, Show, createSignal } from "solid-js";

export default function Home() {
	// const [name, setName] = createSignal<string>();
	const [name, setName] = createSignal<{ name: string }>();
	return (
		<main>
			<Title>Props</Title>
			<h1>Props</h1>
			<button
				type="button"
				onClick={() => {
					setName((n) => ({ name: n ? `${n.name}+` : "hoge" }));
					// setName(`${name() ?? ""}+`);
				}}
			>
				推せ
			</button>
			<button
				type="button"
				onClick={() => {
					setName(undefined);
				}}
			>
				推す？
			</button>
			<div>{name() ? <Div>{name()?.name}</Div> : null}</div>
			<div>
				<Show when={name()}>{(item) => <>{item().name}</>}</Show>
			</div>
			<div>
				<Show when={name()}>{(item) => item().name}</Show>
			</div>
			<div>
				<Display name={name()} />
			</div>
		</main>
	);
}

function Display(props: { name: { name: string } | undefined }) {
	console.log("display");
	return <>{props.name ? <Div>{props.name.name}</Div> : null}</>;
}

function Div(props: ParentProps) {
	console.log("div");
	return <div>{props.children}</div>;
}
