import { combineReducers } from 'redux'
import { IAppState } from 'store/types'
import app from 'store/app/reducer'
// Import state here

export const StorybookReducer = combineReducers<IAppState>({
  app,
  // Insert state here
})