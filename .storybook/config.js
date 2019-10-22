import { configure, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
function loadStories() {
  const req = require.context("../src", true, /\.story\.tsx?$/);
  req.keys().forEach(story => req(story));
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone5"
  },
  options: {
    addonPanelInRight: true
  }
});

configure(loadStories, module);
