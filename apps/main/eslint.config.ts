// @ts-check
import type { Rules } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

const stylisticRules = {
  'curly': 'error',
  'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
} satisfies Partial<Linter.RulesRecord & Rules>

const vueRules = {
  'vue/block-order': ['error', {
    order: ['script', 'template', 'style'],
  }],
  'vue/multi-word-component-names': 'off',
  'vue/prop-name-casing': ['error', 'camelCase'],
} satisfies Partial<Linter.RulesRecord & Rules>

const opinionatedRules = {
  'no-console': 'error',
  'no-restricted-syntax': [
    'error',
    'TSEnumDeclaration',
    'Decorator',
  ],
} satisfies Partial<Linter.RulesRecord & Rules>

export default antfu(
  {
    unocss: true,
    formatters: true,
    pnpm: true,
    rules: {
      ...stylisticRules,
      ...vueRules,
      ...opinionatedRules,
    },
  },
)
  .append(nuxt())
