import { produce } from "immer";
import { For, Index, createSignal } from "solid-js";

export default function Page() {
	const [data, setData] = createSignal([
		{ name: "hoge" },
		{ name: "huga" },
		{ name: "piyo" },
	]);
	const [obj, setObj] = createSignal({ name: "huga", age: 21 });
	return (
		<div>
			<h1>List</h1>
			<button
				type="button"
				onClick={() => {
					setData([{ name: "hoge" }, { name: "foo" }, { name: "piyo" }]);
				}}
			>
				Change
			</button>
			<button
				type="button"
				onClick={() => {
					setData([...data(), { name: "bar" }]);
				}}
			>
				Add
			</button>
			<button
				type="button"
				onClick={() => {
					const list = data();
					setData([...list.slice(1), list[0]]);
				}}
			>
				Sort
			</button>
			<ul>
				<For each={data()}>
					{(item, index) => {
						console.log("for", item);
						return (
							<li style={{ color: index() === 1 ? "red" : "" }}>
								{index()} : {item.name}
							</li>
						);
					}}
				</For>
				<Index each={data()}>
					{(item, index) => {
						console.log("index", index);
						return (
							<li style={{ color: index === 1 ? "red" : "" }}>
								{index} : {item().name}
							</li>
						);
					}}
				</Index>
			</ul>
			<h1>Obj</h1>
			<button
				type="button"
				onClick={() => {
					setObj({ name: "foo", age: 20 });
				}}
			>
				Change
			</button>
			<button
				type="button"
				onClick={() => {
					setObj({ name: "huga", age: 21, address: "tokyo" });
				}}
			>
				Add
			</button>
			<button
				type="button"
				onClick={() => {
					setObj({ age: 21, name: "huga" });
				}}
			>
				Sort
			</button>
			<ul>
				<For each={Object.keys(obj())}>
					{(item, index) => {
						console.log("for", item);
						return (
							<li style={{ color: index() === 1 ? "red" : "" }}>
								{/* @ts-ignore */}
								{index()} {item}: {obj()[item]}
							</li>
						);
					}}
				</For>
				<Index each={Object.keys(obj())}>
					{(item, index) => {
						console.log("index", index, item());
						return (
							<li style={{ color: index === 1 ? "red" : "" }}>
								{/* @ts-ignore */}
								{index} {item()}: {obj()[item()]}
							</li>
						);
					}}
				</Index>
			</ul>
		</div>
	);
}
