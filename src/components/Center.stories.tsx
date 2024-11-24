import type { Meta, StoryObj } from "storybook-solidjs";
import Counter from "./Counter";
const meta: Meta = {
	component: Counter,
};
export default meta;

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
	args: {},
};
