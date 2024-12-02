import { initialize, mswDecorator } from "msw-storybook-addon";
import { providers } from "~/storybook/decorator/providers";

initialize();
const preview = {
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
