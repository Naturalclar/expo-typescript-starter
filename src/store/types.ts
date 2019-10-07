import { Action } from 'redux'
import { IApp } from 'store/app/types'
// Import types here

export interface IAppState {
  nav?: any
  app: IApp
  // Insert types here
}


export interface IReduxAction extends Action {
  payload?: any
}

export interface IErrorReduxAction extends Action {
  payload?: any
}
