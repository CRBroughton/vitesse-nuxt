import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  if (!runtimeConfig.public.posthogEnabled) {
    return
  }
  if (!runtimeConfig.public.posthogPublicKey || runtimeConfig.public.posthogPublicKey === '') {
    return
  }
  if (!runtimeConfig.public.posthogApiHost || runtimeConfig.public.posthogApiHost === '') {
    return
  }

  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogApiHost,
    defaults: runtimeConfig.public.posthogDefaults as '2025-05-24',
    person_profiles: 'identified_only',

    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') {
        posthog.debug()
      }
    },
  })

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
