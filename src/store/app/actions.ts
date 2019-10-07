import { ActionCreator } from 'redux'
import { IReduxAction } from '../types'

export const APP_LANGUAGE_CHANGE = 'APP_LANGUAGE_CHANGE'
export const AppLanguageChange: ActionCreator<IReduxAction> = (payload: string) => ({
  type: APP_LANGUAGE_CHANGE,
  payload
})

export const APP_LANGUAGE_CHANGED = 'APP_LANGUAGE_CHANGED'
export const AppLanguageChanged: ActionCreator<IReduxAction> = (payload: string) => ({
  type: APP_LANGUAGE_CHANGED,
  payload
})

export const APP_THEME_CHANGE = 'APP_THEME_CHANGE'
export const AppThemeChange: ActionCreator<IReduxAction> = (payload: string) => ({
  type: APP_THEME_CHANGE,
  payload
})


export const APP_CONNECTION = 'APP_CONNECTION'
export const AppConnection: ActionCreator<IReduxAction> = (payload: boolean) => ({
  type: APP_CONNECTION,
  payload
})
