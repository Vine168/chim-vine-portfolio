/**
 * Scroll-spy for the single-page navigation.
 *
 * Uses one IntersectionObserver instead of a scroll listener, so nothing runs
 * on the main thread while the user scrolls.
 */
export function useActiveSection(ids: MaybeRefOrGetter<string[]>) {
  const activeId = ref<string>(toValue(ids)[0] ?? '')
  let observer: IntersectionObserver | undefined

  const observe = () => {
    observer?.disconnect()

    const visible = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        // The section covering most of the viewport wins.
        let bestId = activeId.value
        let bestRatio = 0
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestId = id
            bestRatio = ratio
          }
        }

        if (bestRatio > 0) activeId.value = bestId
      },
      {
        // Discount the fixed header so a section counts once it clears it.
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const id of toValue(ids)) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
  }

  onMounted(observe)
  onBeforeUnmount(() => observer?.disconnect())

  return { activeId: readonly(activeId) }
}
