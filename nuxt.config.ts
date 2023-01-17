// https://nuxt.com/docs/api/configuration/nuxt-config
import i18n from './plugins/i18n'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    './modules/test-nuxt-i18n-module'
  ],
  i18n: {
    types: 'composition',
    // parsePages: false,
    //* Used in URL path prefix. Make sure that default locale is the last one!
    locales: [
      {
        code: 'nl',
        file: 'nl-BE.json',
        iso: 'nl-BE',
      },
      {
        code: 'fr',
        file: 'fr-BE.json',
        iso: 'fr-BE',
      },
      {
        code: 'en',
        file: 'en-US.json',
        iso: 'en-US',
      },
    ],
    // * default locale of your project for Nuxt pages and routings
    // strategy: 'prefix',
    defaultLocale: 'en',
    // dynamicRouteParams: true,
    lazy: true,
    langDir: '/lang',
    vueI18n: i18n,
    customRoutes: 'config',
    // baseUrl: '',
    pages: {
      'about-us': {
        fr: '/a-propos',
        nl: '/over-ons'
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      // alwaysRedirect: true,
      // cookieAge: 365,
      // cookieCrossOrigin: false,
      // cookieDomain: null,
      // cookieSecure: false,
      fallbackLocale: 'en',
    },
  },
})
