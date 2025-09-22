import type { StorybookConfig } from '@storybook-vue/nuxt'

const config: StorybookConfig = {
  stories: [
    '../app/**/*.mdx',
    '../app/**/*.stories.@(ts|mdx)',
    '../layers/**/*.mdx',
    '../layers/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
}
export default config
