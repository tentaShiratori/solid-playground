import { screen } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import Page from "~/routes/router/[id]";
import { renderApp } from "~/test/renderApp";

test("increments value", async () => {
	renderApp(() => <Page />, {
		path: "/router/:id",
		currentPath: "/router/1?query=foo",
	});
	expect(screen.getByText("param: 1")).toBeInTheDocument();
	expect(screen.getByText("search: foo")).toBeInTheDocument();
	const button = screen.getByText("Change Search");
	await userEvent.click(button);
	expect(screen.getByText("search: bar")).toBeInTheDocument();
	await userEvent.click(button);
	expect(screen.getByText("search: foo")).toBeInTheDocument();
});
