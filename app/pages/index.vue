<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()

const { locales, setLocale } = useI18n()
</script>

<template>
  <div>
    <Logos mb-6 />
    <div>
      <Button
        v-for="locale in locales"
        :key="locale.name"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </Button>
      <h1>{{ $t('welcome') }}</h1>
    </div>
    <ClientOnly>
      <Suspense>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div op50>
          <span animate-pulse>...</span>
        </div>
      </template>
    </ClientOnly>
    <InputEntry />
  </div>
</template>
