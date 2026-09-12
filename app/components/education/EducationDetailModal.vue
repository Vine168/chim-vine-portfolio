<script setup lang="ts">
import type { Education } from '~/types'

defineProps<{ item: Education | null }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <BaseModal :open="Boolean(item)" labelled-by="education-modal-title" @close="emit('close')">
    <div v-if="item">
      <div class="relative">
        <NuxtImg
          :src="item.image"
          :alt="`${item.school} campus`"
          width="672"
          height="240"
          sizes="xs:100vw sm:672px"
          format="webp"
          loading="lazy"
          class="h-40 w-full bg-ink-100 object-cover sm:h-56"
        />
        <button
          type="button"
          class="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-card transition-colors duration-200 hover:bg-white"
          @click="emit('close')"
        >
          <span class="sr-only">Close</span>
          <Icon name="lucide:x" class="size-4" aria-hidden="true" />
        </button>
      </div>

      <div class="p-6 sm:p-8">
        <p class="text-sm font-medium text-ink-500">{{ item.period }}</p>
        <h2 id="education-modal-title" class="mt-2 text-2xl font-semibold">
          {{ item.school }}
        </h2>
        <p class="mt-1 font-medium text-brand-700">{{ item.degree }}</p>

        <p class="prose-body mt-5 text-base">{{ item.detail || item.summary }}</p>

        <div class="mt-8 grid gap-8 sm:grid-cols-2">
          <section>
            <h3 class="text-sm font-semibold tracking-wide text-ink-900 uppercase">
              Key courses
            </h3>
            <ul class="mt-3 space-y-2">
              <li
                v-for="course in item.courses"
                :key="course"
                class="flex gap-2.5 text-sm text-ink-600"
              >
                <Icon
                  name="lucide:check"
                  class="mt-0.5 size-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>{{ course }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-sm font-semibold tracking-wide text-ink-900 uppercase">
              Achievements
            </h3>
            <ul class="mt-3 space-y-2">
              <li
                v-for="achievement in item.achievements"
                :key="achievement"
                class="flex gap-2.5 text-sm text-ink-600"
              >
                <Icon
                  name="lucide:award"
                  class="mt-0.5 size-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
