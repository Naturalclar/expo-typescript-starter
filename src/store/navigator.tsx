import { NavigationActions } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { BackHandler, Alert } from 'react-native'
import routes from 'screens'
import { lightTheme, darkTheme } from 'theme'
import { IAppState } from './types'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components/native'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

export const routerMiddleware = createReactNavigationReduxMiddleware(
  (state: any) => state
)

const App: any = createReduxContainer(routes, 'root')

export const Navigator: React.FC = () => {
  const dispatch = useDispatch()
  const language = useSelector((state: IAppState) => state.app.language)
  const theme = useSelector((state: IAppState) => state.app.theme)
  const nav = useSelector((state: IAppState) => state.nav)
  const { t } = useTranslation()

  React.useEffect(() => {
    i18n.changeLanguage(language)
    BackHandler.addEventListener('hardwareBackPress', onBackPress)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }
  })

  const onBackPress = () => {
    if (nav.index === 0) {
      Alert.alert(
        t('closeApp.title'),
        t('closeApp.message'),
        [
          {
            onPress: () => BackHandler.exitApp(),
            text: t('yes')
          },
          {
            style: 'cancel',
            text: t('cancel')
          }
        ],
        { cancelable: false }
      )
    }
    dispatch(NavigationActions.back())

    return true
  }

  const _theme = theme === 'light' ? lightTheme : darkTheme
  return (
    <PaperProvider theme={_theme}>
      <ThemeProvider theme={_theme.colors}>
        <App state={nav} dispatch={dispatch} screenProps={{ theme: _theme }} />
      </ThemeProvider>
    </PaperProvider>
  )
}
