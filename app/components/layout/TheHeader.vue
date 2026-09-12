<script setup lang="ts">
import { navigation, profile } from '~/data/profile'

const isMenuOpen = ref(false)
const { activeId } = useActiveSection(navigation.map((item) => item.id))
const { lock, unlock } = useScrollLock()

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(isMenuOpen, (open) => (open ? lock() : unlock()))

// Close the mobile menu on Escape, wherever focus happens to be.
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 border-b border-ink-200/80 bg-white/90 backdrop-blur"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
      <a href="#top" class="text-base font-semibold text-ink-900" @click="closeMenu">
        {{ profile.name }}
      </a>

      <nav class="hidden md:block" aria-label="Sections">
        <ul class="flex items-center gap-1">
          <li v-for="item in navigation" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="
                activeId === item.id
                  ? 'text-brand-700'
                  : 'text-ink-600 hover:text-ink-900'
              "
              :aria-current="activeId === item.id ? 'true' : undefined"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="sr-only">{{ isMenuOpen ? 'Close menu' : 'Open menu' }}</span>
        <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="size-5" />
      </button>
    </div>

    <nav
      v-show="isMenuOpen"
      id="mobile-nav"
      class="border-t border-ink-200 bg-white md:hidden"
      aria-label="Sections"
    >
      <ul class="px-4 py-2">
        <li v-for="item in navigation" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="block rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200"
            :class="
              activeId === item.id ? 'text-brand-700' : 'text-ink-700 hover:bg-ink-50'
            "
            :aria-current="activeId === item.id ? 'true' : undefined"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
