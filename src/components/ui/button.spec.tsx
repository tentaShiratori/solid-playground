import { screen } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import { renderApp } from "~/test/renderApp";
import { Button } from "./button";

test("click", async () => {
  const onClick = vi.fn();
  renderApp(() => <Button onClick={onClick}>button</Button>);
  const counter = screen.getByRole("button");
  expect(counter).toHaveTextContent("button");
  const count = 5;
  for (let i = 0; i < count; i++) {
    await userEvent.click(counter);
  }
  expect(onClick).toHaveBeenCalledTimes(count);
});
