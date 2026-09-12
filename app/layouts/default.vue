<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
    >
      Skip to content
    </a>

    <TheHeader />

    <main id="main" class="flex-1">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>
