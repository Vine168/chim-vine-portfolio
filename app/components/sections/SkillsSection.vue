<script setup lang="ts">
import { skillGroups } from '~/data/skills'
</script>

<template>
  <section id="skills" class="section" aria-labelledby="skills-title">
    <div class="section-inner">
      <SectionHeader
        id="skills-title"
        eyebrow="Skills"
        title="Technologies I work with"
        description="Grouped by where they sit in the stack, not ranked by a percentage bar."
      />

      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <section
          v-for="(group, index) in skillGroups"
          :key="group.id"
          v-reveal="index * 80"
          class="rounded-card border border-ink-200 bg-white p-6 shadow-card"
          :aria-labelledby="`skills-${group.id}`"
        >
          <h3 :id="`skills-${group.id}`" class="text-lg font-semibold">
            {{ group.title }}
          </h3>
          <p class="mt-1 text-sm text-ink-500">{{ group.description }}</p>

          <ul class="mt-6 grid grid-cols-2 gap-2">
            <li
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex items-center gap-2.5 rounded-lg bg-ink-50 px-3 py-2.5 text-sm font-medium text-ink-700"
            >
              <img
                v-if="skill.image"
                :src="skill.image"
                alt=""
                width="16"
                height="16"
                loading="lazy"
                class="size-4 shrink-0 object-contain"
              >
              <Icon
                v-else-if="skill.icon"
                :name="skill.icon"
                class="size-4 shrink-0 text-ink-500"
                aria-hidden="true"
              />
              <span class="leading-snug">{{ skill.name }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
