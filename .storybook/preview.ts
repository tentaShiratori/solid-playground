import { initialize, mswDecorator } from "msw-storybook-addon";
import type { Preview } from "storybook-solidjs";
import { providers } from "../src/storybook/decorator/providers";
initialize();
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [providers, mswDecorator],
};

export default preview;
