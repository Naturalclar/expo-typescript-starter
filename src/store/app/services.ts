import i18n from 'i18next'


export const AppChangeLanguage = (language: string) => new Promise(resolve => {
    i18n.changeLanguage(language)
    resolve(language)
})