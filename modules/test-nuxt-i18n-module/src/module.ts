import { addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit'
import en from './runtime/lang/en-US.json'
import fr from './runtime/lang/fr-BE.json'
import nl from './runtime/lang/nl-BE.json'

export default defineNuxtModule({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },

  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Auto import
    await addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
      prefix: '',
      global: true,
    })

    // I18n hook
    // ! error TS2345: Argument of type '"i18n:extend-messages"' is not assignable to parameter of type 'HookKeys<NuxtHooks>'.
    // // @ts-expect-error Error i18n:extend-messages
    nuxt.hook('i18n:extend-messages', async (additionalMessages, localeCodes) => {
      additionalMessages.push({
        nl: {
          'my-module': nl,
        },
        en: {
          'my-module': en,
        },
        fr: {
          'my-module': fr,
        },
      })
    })
  },
})
