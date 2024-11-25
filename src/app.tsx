import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Client, Provider, cacheExchange, fetchExchange } from "@urql/solid";

export default function App() {
	const client = new Client({
		url: "http://localhost:3000/api/gql",
		exchanges: [cacheExchange, fetchExchange],
	});
	return (
		<Provider value={client}>
			<Router
				root={(props) => (
					<MetaProvider>
						<Title>SolidStart - Basic</Title>
						<a href="/">Index</a>
						<a href="/about">About</a>
						<a href="/auth/signin">SignIn</a>
						<Suspense>{props.children}</Suspense>
					</MetaProvider>
				)}
			>
				<FileRoutes />
			</Router>
		</Provider>
	);
}
