<script setup lang="ts">
import { experiences } from '~/data/experience'
</script>

<template>
  <section id="experience" class="section bg-ink-50/60" aria-labelledby="experience-title">
    <div class="section-inner">
      <SectionHeader
        id="experience-title"
        eyebrow="Experience"
        title="Where I have worked"
        description="Production platforms for the private and public sector, an internship, and team and personal projects — what I built and the stack I used."
      />

      <ol class="relative space-y-8 border-l border-ink-200">
        <ExperienceTimelineItem
          v-for="(item, index) in experiences"
          :key="item.id"
          v-reveal="index * 80"
          :item="item"
        />
      </ol>
    </div>
  </section>
</template>
