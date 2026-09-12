<script setup lang="ts">
defineProps<{
  /** Matches the aria-labelledby on the owning <section>. */
  id: string
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header v-reveal class="mb-12 max-w-2xl md:mb-16">
    <p class="mb-3 text-sm font-semibold tracking-wide text-brand-700 uppercase">
      {{ eyebrow }}
    </p>
    <h2 :id="id" class="text-3xl font-semibold md:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="prose-body mt-4">
      {{ description }}
    </p>
  </header>
</template>
