import { MetaProvider } from "@solidjs/meta";
import {
	createMemoryHistory,
	MemoryRouter,
	Route,
	useNavigate,
} from "@solidjs/router";
import type { Decorator } from "storybook-solidjs";

export const router =
	(path: string, currentPath: string = path): Decorator =>
	(story) => {
		const history = createMemoryHistory();
		history.set({ value: currentPath, scroll: false, replace: true });
		return (
			<MemoryRouter history={history}>
				<Route path={path} component={() => story()} />
			</MemoryRouter>
		);
	};
