<template>
  <footer class="bg-slate-800 text-white py-8 mt-16">
    <div class="max-w-7xl mx-auto text-center px-8">
      <p>&copy; {{ currentYear }} Portfolio. All rights reserved.</p>
      <div class="mt-4 space-x-8">
        <a
          href="#"
          target="_blank"
          class="text-white text-2xl hover:text-emerald-500 transition-colors duration-300"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="#"
          target="_blank"
          class="text-white text-2xl hover:text-emerald-500 transition-colors duration-300"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="#"
          target="_blank"
          class="text-white text-2xl hover:text-emerald-500 transition-colors duration-300"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
