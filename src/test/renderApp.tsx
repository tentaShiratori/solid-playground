import { MetaProvider } from "@solidjs/meta";
import {
	MemoryRouter,
	Route,
	Router,
	createMemoryHistory,
} from "@solidjs/router";
import { render } from "@solidjs/testing-library";
import type { ParentProps } from "solid-js";
import { args } from "valibot";

type UI = Parameters<typeof render>[0];
type Options = NotNull<Parameters<typeof render>[1]>;
type NotNull<T> = T extends null | undefined ? never : T;
export const renderApp = (
	ui: UI,
	options?: Omit<Options, "location"> & { path?: string; currentPath?: string },
) => {
	const Wrapper =
		options?.wrapper ??
		((props: ParentProps) => {
			return <>{props.children}</>;
		});
	const history = createMemoryHistory();
	options?.currentPath &&
		history.set({ value: options.currentPath, scroll: false, replace: true });
	return render(ui, {
		...options,
		wrapper: (props) => {
			return (
				<MetaProvider>
					<MemoryRouter history={history}>
						<Route
							path={options?.path ?? ""}
							component={() => <Wrapper>{props.children}</Wrapper>}
						/>
					</MemoryRouter>
				</MetaProvider>
			);
		},
	});
};
