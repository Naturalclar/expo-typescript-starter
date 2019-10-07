import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { Navigator } from 'store/navigator'
import 'locales'

const { store, persistor } = configureStore(false, true)

export const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
)
