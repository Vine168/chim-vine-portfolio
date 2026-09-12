<script setup lang="ts">
import { contactChannels } from '~/data/contact'
</script>

<template>
  <ul class="space-y-2">
    <li v-for="channel in contactChannels" :key="channel.label">
      <!-- Details without an href (the address) render as plain text. -->
      <component
        :is="channel.href ? 'a' : 'div'"
        :href="channel.href"
        :target="channel.external ? '_blank' : undefined"
        :rel="channel.external ? 'noopener noreferrer' : undefined"
        class="group flex items-center gap-4 rounded-lg border border-transparent px-4 py-3"
        :class="channel.href && 'transition-colors duration-200 hover:border-ink-200 hover:bg-ink-50'"
      >
        <Icon
          :name="channel.icon"
          class="size-5 shrink-0 text-brand-600"
          aria-hidden="true"
        />
        <span class="min-w-0">
          <span class="block text-xs font-medium tracking-wide text-ink-500 uppercase">
            {{ channel.label }}
          </span>
          <span
            class="block text-sm text-ink-800"
            :class="channel.href && 'truncate group-hover:text-brand-700'"
          >
            {{ channel.value }}
          </span>
        </span>
      </component>
    </li>
  </ul>
</template>
