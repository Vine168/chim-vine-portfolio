<script setup>
import Header from "./components/Header.vue";
import HomeSection from "./components/HomeSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechnologySection from "./components/TechnologySection.vue";
import ContactSection from "./components/ContactSection.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800"
  >
    <Header />
    <main class="overflow-hidden">
      <HomeSection />
      <div class="relative">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.1),transparent_50%)]"
        ></div>
        <EducationSection />
      </div>
      <div class="relative">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(167,243,208,0.1),transparent_50%)]"
        ></div>
        <ExperienceSection />
      </div>
      <div class="relative">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.1),transparent_50%)]"
        ></div>
        <TechnologySection />
      </div>
      <div class="relative">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(167,243,208,0.1),transparent_50%)]"
        ></div>
        <ContactSection />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

:root {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
