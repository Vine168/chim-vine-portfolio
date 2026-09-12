<script setup lang="ts">
import { profile } from '~/data/profile'
import { email } from '~/data/contact'
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden border-b border-ink-200 bg-gradient-to-b from-brand-50/60 to-white"
    aria-labelledby="hero-title"
  >
    <div
      class="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-28 pb-20 sm:px-8 md:flex-row md:justify-between md:gap-16 md:pt-36 md:pb-28"
    >
      <div class="max-w-xl text-center md:text-left">
        <p
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700"
        >
          <span class="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
          {{ profile.availability }}
        </p>

        <h1 id="hero-title" class="text-4xl font-semibold sm:text-5xl md:text-6xl">
          {{ profile.name }}
        </h1>

        <p class="mt-3 text-lg font-medium text-brand-700 md:text-xl">
          {{ profile.role }}
        </p>

        <p class="prose-body mt-5">
          {{ profile.headline }}
        </p>

        <div
          class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
        >
          <BaseButton :href="`mailto:${email}`">
            <Icon name="lucide:mail" class="size-4" aria-hidden="true" />
            Get in touch
          </BaseButton>
          <BaseButton href="#experience" variant="secondary">
            View experience
            <Icon name="lucide:arrow-down" class="size-4" aria-hidden="true" />
          </BaseButton>
        </div>

        <p class="mt-8 flex items-center justify-center gap-2 text-sm text-ink-500 md:justify-start">
          <Icon name="lucide:map-pin" class="size-4" aria-hidden="true" />
          {{ profile.location }}
        </p>
      </div>

      <div class="shrink-0">
        <NuxtImg
          :src="profile.heroPortrait"
          :alt="`Portrait of ${profile.name}`"
          width="320"
          height="320"
          sizes="224px md:288px lg:320px"
          format="webp"
          quality="85"
          preload
          fetchpriority="high"
          class="size-56 rounded-2xl border border-ink-200 bg-ink-100 object-cover shadow-card md:size-72 lg:size-80"
        />
      </div>
    </div>
  </section>
</template>
