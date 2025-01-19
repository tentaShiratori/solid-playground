import type { Meta, StoryObj } from "storybook-solidjs";
import { Tinder } from "./Tinder";
const meta: Meta = {
  component: Tinder,
};
export default meta;

type Story = StoryObj<typeof Tinder>;

export const Primary: Story = {
  args: {},
};
