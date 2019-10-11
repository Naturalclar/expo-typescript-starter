import { createStore } from 'redux'
import { StorybookReducer } from './storybook-reducers'
import withReduxEnhancer from 'addon-redux/enhancer'

const store = createStore(StorybookReducer, withReduxEnhancer)

export default store