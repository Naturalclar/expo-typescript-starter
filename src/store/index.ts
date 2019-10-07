import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore, StoreCreator } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from './navigator'
import rootEpic from './rootEpic'
import rootReducer from './reducers'

const blackList = ['']
const epicMiddleware = createEpicMiddleware()

const persistConfig = {
  blackList,
  key: 'root',
  storage: AsyncStorage,
}

const middlewares = [epicMiddleware, routerMiddleware]

const enhancers = __DEV__
  ? composeWithDevTools({})(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares)


const reducers = persistReducer(persistConfig, rootReducer)

const configureStore = (_clean: boolean = false, epic: boolean = false): any => {
  const create: StoreCreator = createStore

  const store = create(reducers, enhancers)
  const persistor = persistStore(store)

  if (epic) {
    epicMiddleware.run(rootEpic)
  }

  // Clear Store
  if (_clean) {
    persistor.purge()
  }

  return { persistor, store }
}

export default configureStore
