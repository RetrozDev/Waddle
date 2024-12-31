import type { Preview } from "@storybook/react";
import '@themes/waddle.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

if (typeof document !== "undefined") {
  document.documentElement.setAttribute("data-theme", "waddle");
}


export default preview;
