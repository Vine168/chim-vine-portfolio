/**
 * Locks body scroll while an overlay (mobile menu, modal) is open.
 * Reference-counted so two overlays cannot unlock each other's scroll.
 */
let lockCount = 0

export function useScrollLock() {
  let holdsLock = false

  const apply = () => {
    document.body.style.overflow = lockCount > 0 ? 'hidden' : ''
  }

  const lock = () => {
    if (holdsLock) return
    holdsLock = true
    lockCount += 1
    apply()
  }

  const unlock = () => {
    if (!holdsLock) return
    holdsLock = false
    lockCount = Math.max(0, lockCount - 1)
    apply()
  }

  onBeforeUnmount(unlock)

  return { lock, unlock }
}
