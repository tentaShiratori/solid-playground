import { fc, test } from "@fast-check/vitest";
import { render } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test.prop([fc.integer({ min: 1, max: 10 })])(
	"increments value",
	async (count) => {
		const { getByRole } = render(() => <Counter />);
		const counter = getByRole("button");
		expect(counter).toHaveTextContent("Clicks: 0");
		for (let i = 0; i < count; i++) {
			await userEvent.click(counter);
		}
		expect(counter).toHaveTextContent(`Clicks: ${count}`);
	},
);
