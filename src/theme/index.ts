import { DarkTheme, DefaultTheme, Theme } from 'react-native-paper'

const pallete = {
    primary: '#006699',
    accent: '#546e7a',
}

export const lightTheme: Theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: pallete.primary,
        accent: pallete.accent,
    },
}

export const darkTheme: Theme = {
    ...DarkTheme,
    roundness: 2,
    colors: {
        ...DarkTheme.colors,
        primary: pallete.primary,
        accent: pallete.accent,
        background: '#070809'
    },
}

export interface ITheme {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
}

export interface IStyled {
    theme: ITheme
}

interface IThemes {
    light: Theme
    dark: Theme
}
export const themes: IThemes = {
    light: lightTheme,
    dark: darkTheme
}