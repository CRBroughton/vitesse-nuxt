<script setup lang="ts">
const emit = defineEmits<{
  click: [payload: MouseEvent]
}>()
</script>

<template>
  <button
    class="px-3 py-2 rounded-lg bg-emerald"
    @click="(event) => emit('click', event)"
  >
    <p class="text-white">
      <slot />
    </p>
  </button>
</template>
