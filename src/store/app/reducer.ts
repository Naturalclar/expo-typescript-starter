import { Reducer, Action } from 'redux'
import * as actions from './actions'
import { IApp } from './types'

export const initialState: IApp = {
  language: 'en',
  theme: 'light',
  online: false
}

const productReducer: Reducer<IApp> = (state = initialState, action: Action | any) => {
  switch (action.type) {

    case actions.APP_THEME_CHANGE:
      return {
        ...state,
        theme: action.payload
      }
    case actions.APP_CONNECTION:
      return {
        ...state,
        online: action.payload
      }

    case actions.APP_LANGUAGE_CHANGE:
      return {
        ...state,
        language: action.payload
      }

    default:
      return state
  }
}

export default productReducer
