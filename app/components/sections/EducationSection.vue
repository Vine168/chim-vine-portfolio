<script setup lang="ts">
import type { Education } from '~/types'
import { educationList } from '~/data/education'

const selected = ref<Education | null>(null)
</script>

<template>
  <section id="education" class="section bg-ink-50/60" aria-labelledby="education-title">
    <div class="section-inner">
      <SectionHeader
        id="education-title"
        eyebrow="Education"
        title="Academic background"
        description="Formal study plus the competitions and certifications alongside it."
      />

      <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(item, index) in educationList"
          :key="item.id"
          v-reveal="index * 60"
        >
          <EducationCard :item="item" @select="selected = item" />
        </li>
      </ul>
    </div>

    <EducationDetailModal :item="selected" @close="selected = null" />
  </section>
</template>
