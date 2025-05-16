<template>
  <header
    class="fixed top-0 left-0 right-0 px-4 md:px-8 py-4 bg-white/95 backdrop-blur-sm flex justify-between items-center transition-all duration-300 ease-in-out z-[1000]"
    :class="{ 'shadow-[0_2px_10px_rgba(0,0,0,0.1)]': scrolled }"
  >
    <div>
      <h1
        class="text-[1.25rem] md:text-[1.5rem] m-0 text-emerald-500 font-bold"
      >
        Chim Vine
      </h1>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden p-2 text-slate-700 hover:text-emerald-500 transition-colors duration-300"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <i
        :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"
        class="text-xl"
      ></i>
    </button>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex gap-8">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        @click.prevent="scrollToSection(section.id)"
        class="no-underline text-slate-700 font-medium transition-all duration-300 ease-in-out relative py-2 hover:text-emerald-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
        :class="{
          'text-emerald-500 after:w-full': activeSection === section.id,
        }"
      >
        {{ section.name }}
      </a>
    </nav>

    <!-- Mobile Navigation -->
    <nav
      class="md:hidden fixed top-[60px] left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
      :class="isMenuOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'"
    >
      <div class="py-2">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          @click.prevent="scrollToSectionMobile(section.id)"
          class="block px-8 py-3 no-underline text-slate-700 font-medium transition-all duration-300 ease-in-out hover:text-emerald-500 hover:bg-gray-50"
          :class="{
            'text-emerald-500 bg-gray-50': activeSection === section.id,
          }"
        >
          {{ section.name }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sections = ref([
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "education", name: "Education" },
  { id: "experience", name: "Experience" },
  { id: "technology", name: "Technology" },
  { id: "contact", name: "Contact" },
]);

const scrolled = ref(false);
const activeSection = ref("home");
const isMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 0;

  const sectionElements = sections.value.map((section) => ({
    id: section.id,
    element: document.getElementById(section.id),
  }));

  for (const { id, element } of sectionElements) {
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = id;
        break;
      }
    }
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToSectionMobile = (id) => {
  isMenuOpen.value = false;
  scrollToSection(id);

  // Prevent body scroll when mobile menu is open
  document.body.classList.remove("menu-open");
};

// Toggle body scroll when mobile menu opens/closes
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle("menu-open", isMenuOpen.value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.classList.remove("menu-open");
});
</script>

<style scoped>
/* Prevent body scroll when mobile menu is open */
:global(body.menu-open) {
  overflow: hidden;
}
</style>
