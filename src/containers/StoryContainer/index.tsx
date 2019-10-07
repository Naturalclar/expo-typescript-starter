import * as React from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from 'store/types'
import { lightTheme, darkTheme } from 'theme'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components/native'

interface Props {
  children: any
}
export const StoryContainer: React.FC<Props> = ({ children }) => {
  const theme = useSelector((state: IAppState) => state.app.theme)
  const _theme = theme === 'light' ? lightTheme : darkTheme
  return (
    <PaperProvider theme={_theme}>
      <ThemeProvider theme={_theme.colors}>{children}</ThemeProvider>
    </PaperProvider>
  )
}
