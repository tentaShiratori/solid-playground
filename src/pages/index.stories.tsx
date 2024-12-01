import { http, HttpResponse } from "msw";
import type { Meta, StoryObj } from "storybook-solidjs";
import Page from "~/routes/";
import { router } from "~/storybook/decorator/router";
const meta: Meta = {
	component: Page,
	decorators: [router("/")],
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
	args: {},
	parameters: {
		msw: [
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
		],
	},
};
