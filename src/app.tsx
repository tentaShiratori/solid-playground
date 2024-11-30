import { MetaProvider, Title } from "@solidjs/meta";
import { A, Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createResource, lazy } from "solid-js";
import "./app.css";
import { SessionProvider } from "@solid-mediakit/auth/client";
import {
	Client as UrqlClient,
	Provider as UrqlProvider,
	cacheExchange,
	fetchExchange,
} from "@urql/solid";

const fetchUser = async () => {
	return (await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
		(response) => response.json(),
	)) as { userId: number; id: number; title: string; completed: boolean };
};
function preloadUser() {
	const [user] = createResource(fetchUser);
	return user;
}
const User = lazy(() => import("./components/Migrate"));

export default function App() {
	const urqlClient = new UrqlClient({
		url: "http://localhost:3000/api/gql",
		exchanges: [cacheExchange, fetchExchange],
	});
	return (
		<UrqlProvider value={urqlClient}>
			<Router
				preload={false}
				root={(props) => (
					<MetaProvider>
						<Title>SolidStart - Basic</Title>
						<A href="/">Index</A>
						<A href="/about">About</A>
						<A href="/migrate">Migrate</A>
						<A href="/props">Props</A>
						<A href="/account">Account</A>
						<A href="/auth/signin">SignIn</A>
						<Suspense>
							<SessionProvider>{props.children}</SessionProvider>
						</Suspense>
					</MetaProvider>
				)}
			>
				<FileRoutes />
				<Route path="/migrate/:id?" component={User} preload={preloadUser} />
			</Router>
		</UrqlProvider>
	);
}
