<script setup lang="ts">
defineProps<{
  items: string[]
  label?: string
}>()
</script>

<template>
  <ul class="flex flex-wrap gap-2" :aria-label="label">
    <li
      v-for="item in items"
      :key="item"
      class="rounded-md bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700"
    >
      {{ item }}
    </li>
  </ul>
</template>
