import checker from 'vite-plugin-checker'
import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'
import { validatePosthogConfig } from './hooks'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/storybook',
    '@nuxtjs/i18n',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      posthogEnabled: false,
      posthogPublicKey: '',
      posthogApiHost: '',
      posthogDefaults: '2025-05-24',
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },
  // required for Storybook
  // https://github.com/nuxt-modules/storybook/issues/835
  vite: {
    plugins: [checker({ vueTsc: true })],
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  hooks: {
    ready: () => {
      validatePosthogConfig()
    },
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-GB', file: 'en.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },

  pwa,

  storybook: {
    port: 6006,
  },
})
