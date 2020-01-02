import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducer from '../reducer';

// development なら redux-loggerを入れる
const logger = __DEV__ ? [reduxLogger] : [];

const middlewares = applyMiddleware(thunk, ...logger);

const initialState = {};

const store = createStore(reducer, initialState, middlewares);
const persistor = persistStore(store);

export { store, persistor };
