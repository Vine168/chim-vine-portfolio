<script setup lang="ts">
const { open, labelledBy } = defineProps<{
  open: boolean
  /** id of the element that titles the dialog. */
  labelledBy: string
}>()

const emit = defineEmits<{ close: [] }>()

const panel = useTemplateRef<HTMLElement>('panel')
const { lock, unlock } = useScrollLock()

let previouslyFocused: HTMLElement | null = null

const focusableSelector =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

const focusableElements = () =>
  Array.from(panel.value?.querySelectorAll<HTMLElement>(focusableSelector) ?? [])

/** Keeps Tab cycling inside the dialog, as expected of a modal. */
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key !== 'Tab') return

  const elements = focusableElements()
  if (!elements.length) return

  const first = elements[0]!
  const last = elements[elements.length - 1]!
  const active = document.activeElement

  if (event.shiftKey && (active === first || active === panel.value)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(
  () => open,
  async (isOpen) => {
    if (isOpen) {
      previouslyFocused = document.activeElement as HTMLElement | null
      lock()
      await nextTick()
      ;(focusableElements()[0] ?? panel.value)?.focus()
    } else {
      unlock()
      previouslyFocused?.focus()
      previouslyFocused = null
    }
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-ink-900/50 p-0 sm:items-center sm:p-6"
        @keydown="onKeydown"
      >
        <!-- Backdrop: click-to-close, hidden from assistive tech. -->
        <button
          type="button"
          class="absolute inset-0 h-full w-full cursor-default"
          aria-hidden="true"
          tabindex="-1"
          @click="emit('close')"
        />

        <div
          ref="panel"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="labelledBy"
          tabindex="-1"
          class="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-xl sm:rounded-2xl"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
