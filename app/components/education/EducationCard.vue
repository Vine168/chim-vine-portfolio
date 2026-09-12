<script setup lang="ts">
import type { Education } from '~/types'

defineProps<{ item: Education }>()
const emit = defineEmits<{ select: [] }>()
</script>

<template>
  <article
    class="flex h-full flex-col rounded-card border border-ink-200 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
  >
    <p class="text-sm font-medium text-ink-500">{{ item.period }}</p>
    <h3 class="mt-2 text-lg font-semibold">{{ item.school }}</h3>
    <p class="mt-1 text-sm font-medium text-brand-700">{{ item.degree }}</p>
    <p class="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{{ item.summary }}</p>

    <button
      type="button"
      class="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-brand-700 transition-colors duration-200 hover:text-brand-800"
      @click="emit('select')"
    >
      Details
      <span class="sr-only">about {{ item.school }}</span>
      <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
    </button>
  </article>
</template>
