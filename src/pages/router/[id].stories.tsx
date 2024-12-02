import { useLocation, useNavigate } from "@solidjs/router";
import type { Meta, StoryObj } from "storybook-solidjs";
import Page from "~/routes/router/[id]";
import { router } from "~/storybook/decorator/router";
const meta: Meta = {
  component: Page,
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: {},
  decorators: [router("/router/:id", "/router/111")],
};
