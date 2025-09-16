import process from 'node:process'
import { consola } from 'consola'

export function validatePosthogConfig() {
  consola.start('Checking PostHog configuration...')

  const posthogEnabled = process.env.NUXT_PUBLIC_POSTHOG_ENABLED === 'true'
  const posthogKey = process.env.NUXT_PUBLIC_POSTHOG_PUBLIC_KEY
  const posthogHost = process.env.NUXT_PUBLIC_POSTHOG_API_HOST

  if (!posthogEnabled) {
    consola.info('PostHog disabled via NUXT_PUBLIC_POSTHOG_ENABLED')
    return
  }

  if (!posthogKey) {
    consola.error('PostHog configuration has no public key provided!')
    return
  }

  if (!posthogHost) {
    consola.error('PostHog configuration has no API host provided!')
    return
  }

  consola.success('PostHog enabled and configured:', {
    host: posthogHost,
    key: `${posthogKey.substring(0, 8)}...`,
    environment: process.env.NODE_ENV,
  })
}
