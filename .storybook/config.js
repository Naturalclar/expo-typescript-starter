import { configure, addDecorator, addParameters } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";

function loadStories() {
  const req = require.context("../src", true, /\.story\.tsx?$/);
  req.keys().forEach(story => req(story));
}

addDecorator(withKnobs({ escapeHTML: false }));
addDecorator(
  withOptions({
    addonPanelInRight: true
  })
);

addParameters({
  viewport: {
    defaultViewport: "iphone5"
  }
});

configure(loadStories, module);
