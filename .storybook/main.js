import path from "node:path";
/** @type { import('storybook-solidjs-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../src"),
    };
    return config;
  },
  // staticDirs: ["../public"],
};
export default config;
