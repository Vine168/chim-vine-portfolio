<script setup lang="ts">
interface Props {
  /** Renders an anchor when set, a button otherwise. */
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  external?: boolean
  block?: boolean
}

const {
  href,
  variant = 'primary',
  type = 'button',
  external = false,
  block = false,
} = defineProps<Props>()

const variantClasses: Record<NonNullable<Props['variant']>, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800',
  secondary: 'border border-ink-300 text-ink-800 hover:border-ink-400 hover:bg-ink-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
}

const externalAttrs = computed(() =>
  external ? { target: '_blank', rel: 'noopener noreferrer' } : {},
)
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    v-bind="externalAttrs"
    class="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200"
    :class="[variantClasses[variant], block && 'w-full']"
  >
    <slot />
  </component>
</template>
