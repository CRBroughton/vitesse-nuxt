// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    rules: {
      'no-console': 'error',
      'no-restricted-syntax': [
        'error',
        'TSEnumDeclaration',
        'Decorator',
      ],
    },
  },
)
  .append(nuxt())
