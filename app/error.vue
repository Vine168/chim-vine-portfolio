<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()

useSeoMeta({ title: `${error.statusCode} — Page not found`, robots: 'noindex' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <p class="text-sm font-semibold tracking-wide text-brand-700 uppercase">
      Error {{ error.statusCode }}
    </p>
    <h1 class="mt-3 text-3xl font-semibold md:text-4xl">
      {{ error.statusCode === 404 ? 'This page does not exist' : 'Something went wrong' }}
    </h1>
    <p class="prose-body mt-4 max-w-md">
      {{
        error.statusCode === 404
          ? 'The page you were looking for has moved or never existed.'
          : 'An unexpected error occurred. Please try again.'
      }}
    </p>
    <BaseButton class="mt-8" href="/" @click="clearError({ redirect: '/' })">
      Back to the portfolio
    </BaseButton>
  </div>
</template>
