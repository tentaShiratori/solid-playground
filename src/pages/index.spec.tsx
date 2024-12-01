import { server } from "~/test/msw";
import { http, HttpResponse } from "msw";
import Page, { route } from "~/routes";
import { renderApp } from "~/test/renderApp";
import { screen, waitFor } from "@solidjs/testing-library";

function setupMSW() {
	server.use(
		http.all("https://jsonplaceholder.typicode.com/todos/1", () => {
			return HttpResponse.json({
				userId: 1,
				id: 1,
				title: "todo1",
				completed: false,
			});
		}),
		http.all("https://jsonplaceholder.typicode.com/todos/2", () => {
			return HttpResponse.json({
				userId: 1,
				id: 2,
				title: "todo2",
				completed: true,
			});
		}),
	);
}

beforeEach(() => {
	setupMSW();
});
it("increments value", async () => {
	await route.preload();
	renderApp(() => <Page />, {});
	await waitFor(() => expect(screen.getByText("todo1")).toBeInTheDocument());
});
