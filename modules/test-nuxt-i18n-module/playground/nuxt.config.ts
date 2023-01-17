import moduleCounter from '../'

export default defineNuxtConfig({
  ssr: true,
  modules: [
    moduleCounter,
  ],
  components: { global: true, dirs: ['~/components'] },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
})
