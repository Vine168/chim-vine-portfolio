<template>
  <header
    class="fixed top-0 left-0 right-0 px-8 py-4 bg-white/95 backdrop-blur-sm flex justify-between items-center transition-all duration-300 ease-in-out z-[1000]"
    :class="{ 'shadow-[0_2px_10px_rgba(0,0,0,0.1)]': scrolled }"
  >
    <div>
      <h1 class="text-[1.5rem] m-0 text-emerald-500 font-bold">Chim Vine</h1>
    </div>
    <nav class="flex gap-8">
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
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sections = [
  { id: "home", name: "Home" },
  { id: "education", name: "Education" },
  { id: "experience", name: "Experience" },
  { id: "technology", name: "Technology" },
  { id: "contact", name: "Contact" },
];

const scrolled = ref(false);
const activeSection = ref("home");

const handleScroll = () => {
  // Add shadow when scrolled
  scrolled.value = window.scrollY > 0;

  // Update active section based on scroll position
  const sectionElements = sections.map((section) => ({
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

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
