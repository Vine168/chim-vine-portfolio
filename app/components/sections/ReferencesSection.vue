<script setup lang="ts">
import { references } from '~/data/references'

// Only promise "on request" while no referee's details are published.
const description = references.some((person) => person.phone || person.email)
  ? undefined
  : 'Contact details are shared on request — send me a message below.'
</script>

<template>
  <section id="references" class="section" aria-labelledby="references-title">
    <div class="section-inner">
      <SectionHeader
        id="references-title"
        eyebrow="References"
        title="People who can speak to my work"
        :description="description"
      />

      <ul class="grid gap-6 md:grid-cols-2">
        <li v-for="(person, index) in references" :key="person.name" v-reveal="index * 80">
          <article
            class="flex h-full gap-4 rounded-card border border-ink-200 bg-white p-6 shadow-card"
          >
            <Icon
              name="lucide:user-round"
              class="mt-1 size-5 shrink-0 text-brand-600"
              aria-hidden="true"
            />
            <div class="min-w-0">
              <h3 class="text-lg font-semibold">{{ person.name }}</h3>
              <p class="mt-1 text-sm font-medium text-brand-700">{{ person.title }}</p>
              <p class="mt-1 text-sm text-ink-600">{{ person.organization }}</p>

              <ul v-if="person.phone || person.email" class="mt-4 space-y-1.5 text-sm">
                <li v-if="person.phone" class="flex items-center gap-2.5">
                  <Icon name="lucide:phone" class="size-4 shrink-0 text-ink-500" aria-hidden="true" />
                  <a
                    :href="`tel:${person.phone.replace(/\s/g, '')}`"
                    class="text-ink-800 transition-colors duration-200 hover:text-brand-700"
                  >
                    {{ person.phone }}
                  </a>
                </li>
                <li v-if="person.email" class="flex items-center gap-2.5">
                  <Icon name="lucide:mail" class="size-4 shrink-0 text-ink-500" aria-hidden="true" />
                  <a
                    :href="`mailto:${person.email}`"
                    class="truncate text-ink-800 transition-colors duration-200 hover:text-brand-700"
                  >
                    {{ person.email }}
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
