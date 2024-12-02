import { MetaProvider } from "@solidjs/meta";
import type { Decorator } from "storybook-solidjs";

export const providers: Decorator = (story) => {
  return <MetaProvider>{story()}</MetaProvider>;
};
