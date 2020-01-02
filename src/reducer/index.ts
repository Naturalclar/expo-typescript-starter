/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default combineReducers({
  foo: (state = {}, action: any) => {
    return state;
  },
  bar: persistReducer({ key: 'bar', storage }, (state = {}, action: any) => {
    return state;
  }),
});
