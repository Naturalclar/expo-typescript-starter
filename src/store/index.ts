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

// let tron
// if (__DEV__) {
//   const {
//     trackGlobalErrors,
//     openInEditor,
//     overlay,
//     asyncStorage,
//     networking,
//   } = require('reactotron-react-native')
//   const Reactotron = require('reactotron-react-native').default
//   const { reactotronRedux } = require('reactotron-redux')

//   tron = Reactotron.configure({
//     host: '192.168.15.11',
//   })
//     .useReactNative()
//     .use(reactotronRedux())
//     .use(trackGlobalErrors())
//     .use(openInEditor())
//     .use(overlay())
//     .use(asyncStorage())
//     .use(networking())
//     .connect()

//   tron.clear()
// }

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
