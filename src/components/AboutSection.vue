<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
});
</script>

<template>
  <section
    id="about"
    class="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12 md:mb-16" data-aos="fade-up">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
        >
          About Me
        </h2>
        <div
          class="w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"
        ></div>
      </div>

      <!-- About Content -->
      <div
        class="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <!-- Profile Image -->
        <div
          class="relative w-full max-w-[280px] md:max-w-md mx-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div
            class="relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="/about/cv-chimvine.png"
              alt="Profile"
              class="w-full h-auto rounded-2xl shadow-xl"
            />
            <!-- Decorative elements - smaller on mobile -->
            <div
              class="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl opacity-50 -z-10"
            ></div>
            <div
              class="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl opacity-50 -z-10"
            ></div>
          </div>
        </div>

        <!-- About Text -->
        <div
          class="space-y-6 text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p class="text-base md:text-lg text-gray-600 leading-relaxed">
            Hi there! I'm a passionate software developer with a strong
            foundation in full-stack development. I specialize in building
            modern web applications using cutting-edge technologies.
          </p>
          <p class="text-base md:text-lg text-gray-600 leading-relaxed">
            With a background in computer science and a keen eye for detail, I
            strive to create elegant solutions to complex problems. I'm
            particularly interested in user experience and performance
            optimization.
          </p>
          <div class="pt-4 md:pt-6">
            <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Quick Facts
            </h3>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <li
                class="flex items-center justify-center md:justify-start space-x-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span class="text-emerald-500 w-8">
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </span>
                <span class="text-gray-600">Phnom Penh in Cambodia</span>
              </li>
              <li
                class="flex items-center justify-center md:justify-start space-x-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span class="text-emerald-500 w-8">
                  <i class="fas fa-graduation-cap text-xl"></i>
                </span>
                <span class="text-gray-600">Computer Science Graduate</span>
              </li>
              <li
                class="flex items-center justify-center md:justify-start space-x-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span class="text-emerald-500 w-8">
                  <i class="fas fa-laptop-code text-xl"></i>
                </span>
                <span class="text-gray-600">Full-Stack Developer</span>
              </li>
              <li
                class="flex items-center justify-center md:justify-start space-x-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span class="text-emerald-500 w-8">
                  <i class="fas fa-language text-xl"></i>
                </span>
                <span class="text-gray-600">Khmer & English</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
