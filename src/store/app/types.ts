import { Action } from 'redux'

export interface IApp {
  language: string
  theme: string
  online: boolean
}

export interface IResponse extends Action {
}
