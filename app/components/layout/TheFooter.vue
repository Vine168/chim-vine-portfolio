<script setup lang="ts">
import { socialChannels } from '~/data/contact'
import { profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink-200 bg-ink-50">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:px-8 md:flex-row"
    >
      <p class="text-sm text-ink-500">
        © {{ year }} {{ profile.name }}. Built with Nuxt and Tailwind CSS.
      </p>

      <ul class="flex items-center gap-2">
        <li v-for="channel in socialChannels" :key="channel.label">
          <a
            :href="channel.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex size-10 items-center justify-center rounded-md text-ink-500 transition-colors duration-200 hover:bg-white hover:text-brand-700"
          >
            <span class="sr-only">{{ channel.label }}</span>
            <Icon :name="channel.icon" class="size-5" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
