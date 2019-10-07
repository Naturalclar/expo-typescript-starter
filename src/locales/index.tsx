import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translation: require('./en.json')
  },
  pt: {
    translation: require('./pt.json')
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en'

    // keySeparator: false, // we do not use keys in form messages.welcome

    // interpolation: {
    //   escapeValue: false // react already safes from xss
    // }
  })
