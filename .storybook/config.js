import { configure, addDecorator, addParameters } from "@storybook/react"
import { setOptions } from "@storybook/addon-options"
import { withKnobs } from "@storybook/addon-knobs"
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { themes } from '../src/theme'
import '../src/locales'
const App = require('../app.json')

setOptions({
  name: App.name,
  url: 'https://necolas.github.io/react-native-web',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: true,
  showStoriesPanel: true
})

addParameters({
  viewport: {
    defaultViewport: "iphone6"
  }
})

addDecorator(withThemesProvider(themes))

addDecorator(withKnobs({ escapeHTML: false }))

const loadStories = () => {
  const req = require.context("../src", true, /\.story\.tsx?$/)
  req.keys().forEach(story => req(story))
}

configure(loadStories, module)
