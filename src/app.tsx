import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import {
	Client as UrqlClient,
	Provider as UrqlProvider,
	cacheExchange,
	fetchExchange,
} from "@urql/solid";

export default function App() {
	const urqlClient = new UrqlClient({
		url: "http://localhost:3000/api/gql",
		exchanges: [cacheExchange, fetchExchange],
	});
	return (
		<UrqlProvider value={urqlClient}>
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
		</UrqlProvider>
	);
}
