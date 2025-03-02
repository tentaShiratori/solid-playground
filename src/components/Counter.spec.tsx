import { fc, it } from "@fast-check/vitest";
import userEvent from "@testing-library/user-event";
import { renderApp } from "~/test/renderApp";
import Counter from "./Counter";
it.prop([fc.integer({ min: 1, max: 10 })], { numRuns: 1 })(
  "increments value",
  async (count) => {
    const { getByRole } = renderApp(() => <Counter />);
    const counter = getByRole("button");
    expect(counter).toHaveTextContent("Clicks: 0");
    for (let i = 0; i < count; i++) {
      await userEvent.click(counter);
    }
    expect(counter).toHaveTextContent(`Clicks: ${count}`);
  },
);
