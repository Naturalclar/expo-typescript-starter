import { Action } from 'redux'
import { Theme } from 'react-native-paper';

export interface IApp {
  language: string
  theme: Theme
  online: boolean
}

export interface IResponse extends Action {
}
