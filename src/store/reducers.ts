import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from 'screens'
import { IAppState } from 'store/types'
import app from 'store/app/reducer'
// Import state here

const nav = createNavigationReducer(AppNavigator)

export default combineReducers<IAppState>({
  nav,
  app,
  // Insert state here
})
