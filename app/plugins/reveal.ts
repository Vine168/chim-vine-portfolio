/**
 * `v-reveal` — fades an element up once as it enters the viewport.
 *
 * Replaces the AOS dependency (~15kB JS + CSS) with ~40 lines and no library.
 * Honours prefers-reduced-motion, and renders as a no-op during SSR so the
 * prerendered HTML stays visible with JavaScript disabled.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  let prefersReducedMotion = false

  if (import.meta.client) {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            const element = entry.target as HTMLElement
            element.dataset.reveal = 'shown'
            observer?.unobserve(element)
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
      )
    }
  }

  nuxtApp.vueApp.directive('reveal', {
    // Nothing is emitted server-side: the element ships fully visible.
    getSSRProps: () => ({}),

    mounted(element: HTMLElement, binding) {
      if (prefersReducedMotion || !observer) return

      element.dataset.reveal = 'hidden'
      if (typeof binding.value === 'number') {
        element.style.transitionDelay = `${binding.value}ms`
      }
      observer.observe(element)
    },

    unmounted(element: HTMLElement) {
      observer?.unobserve(element)
    },
  })
})
