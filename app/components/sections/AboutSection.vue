<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="section-inner">
      <SectionHeader
        id="about-title"
        eyebrow="About"
        title="A developer who ships across the stack"
      />

      <div class="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16">
        <div v-reveal class="space-y-5">
          <p v-for="(paragraph, index) in profile.summary" :key="index" class="prose-body">
            {{ paragraph }}
          </p>

          <dl class="grid gap-3 pt-4 sm:grid-cols-2">
            <div
              v-for="fact in profile.facts"
              :key="fact.label"
              class="flex items-center gap-3 rounded-lg border border-ink-200 px-4 py-3"
            >
              <dt class="sr-only">Detail</dt>
              <Icon
                :name="fact.icon"
                class="size-5 shrink-0 text-brand-600"
                aria-hidden="true"
              />
              <dd class="text-sm text-ink-700">{{ fact.label }}</dd>
            </div>
          </dl>
        </div>

        <div v-reveal="100" class="order-first md:order-none">
          <NuxtImg
            :src="profile.portrait"
            :alt="`${profile.name}, ${profile.role}`"
            width="320"
            height="320"
            sizes="240px md:320px"
            format="webp"
            loading="lazy"
            class="mx-auto size-60 rounded-2xl border border-ink-200 bg-ink-100 object-cover md:size-80"
          />
        </div>
      </div>
    </div>
  </section>
</template>
