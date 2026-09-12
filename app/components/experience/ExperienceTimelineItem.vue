<script setup lang="ts">
import type { Experience } from '~/types'

defineProps<{ item: Experience }>()
</script>

<template>
  <li class="relative pl-8 md:pl-10">
    <!-- Timeline rail marker -->
    <span
      class="absolute left-0 top-2 size-3 rounded-full border-2 border-brand-500 bg-white"
      aria-hidden="true"
    />

    <article
      class="rounded-card border border-ink-200 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover md:p-8"
    >
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start">
        <NuxtImg
          v-if="item.image"
          :src="item.image"
          :alt="`${item.project} at ${item.company}`"
          width="384"
          height="240"
          sizes="xs:100vw sm:192px"
          format="webp"
          loading="lazy"
          class="h-40 w-full shrink-0 rounded-lg border border-ink-200 bg-ink-50 object-cover sm:h-30 sm:w-48"
        />
        <!-- Logos are shown whole on white; fit="inside" stops the optimiser cropping them. -->
        <NuxtImg
          v-else-if="item.logo"
          :src="item.logo"
          :alt="`${item.project} logo`"
          width="384"
          height="240"
          fit="inside"
          sizes="xs:100vw sm:192px"
          format="webp"
          loading="lazy"
          class="h-40 w-full shrink-0 rounded-lg border border-ink-200 bg-white object-contain p-4 sm:h-30 sm:w-48 sm:p-3"
        />
        <!-- Work with no image to show: a compact icon tile instead. -->
        <div
          v-else
          class="flex size-12 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50 text-brand-600 sm:h-30 sm:w-48"
          aria-hidden="true"
        >
          <Icon :name="item.icon ?? 'lucide:briefcase'" class="size-6 sm:size-10" />
        </div>

        <div class="min-w-0">
          <p class="text-sm font-medium text-ink-500">{{ item.period }}</p>
          <h3 class="mt-1 text-xl font-semibold">{{ item.project }}</h3>
          <p class="mt-1 text-sm font-medium text-brand-700">
            {{ item.role }} · {{ item.company }}
          </p>
        </div>
      </div>

      <p class="prose-body mt-6 text-base">{{ item.summary }}</p>

      <ul class="mt-5 space-y-2">
        <li
          v-for="highlight in item.highlights"
          :key="highlight"
          class="flex gap-3 text-sm leading-relaxed text-ink-600"
        >
          <Icon
            name="lucide:check"
            class="mt-0.5 size-4 shrink-0 text-brand-600"
            aria-hidden="true"
          />
          <span>{{ highlight }}</span>
        </li>
      </ul>

      <TagList :items="item.stack" label="Technologies used" class="mt-6" />
    </article>
  </li>
</template>
