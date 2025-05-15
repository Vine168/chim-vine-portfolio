<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
});
</script>

<template>
  <section id="about" class="py-32 px-8 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Me
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"
        ></div>
      </div><!-- About Content -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Profile Image -->
        <div class="relative" data-aos="fade-right" data-aos-duration="1000">
          <div class="relative w-full max-w-md mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
            <img
              src="/about/cv-chimvine.png"
              alt="Profile"
              class="w-full h-auto rounded-2xl shadow-xl"
            />
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl opacity-50 -z-10"></div>
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl opacity-50 -z-10"></div>
          </div>
        </div>        <!-- About Text -->
        <div class="space-y-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <p class="text-lg text-gray-600 leading-relaxed">
            Hi there! I'm a passionate software developer with a strong foundation in full-stack development. I specialize in building modern web applications using cutting-edge technologies like Vue.js, React, and Node.js.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            With a background in computer science and a keen eye for detail, I strive to create elegant solutions to complex problems. I'm particularly interested in user experience and performance optimization.
          </p>
          <div class="pt-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Quick Facts</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li class="flex items-center space-x-3">
                <span class="text-emerald-500">
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </span>
                <span class="text-gray-600">Based in Cambodia</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-emerald-500">
                  <i class="fas fa-graduation-cap text-xl"></i>
                </span>
                <span class="text-gray-600">Computer Science Graduate</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-emerald-500">
                  <i class="fas fa-laptop-code text-xl"></i>
                </span>
                <span class="text-gray-600">Full-Stack Developer</span>
              </li>
              <li class="flex items-center space-x-3">
                <span class="text-emerald-500">
                  <i class="fas fa-language text-xl"></i>
                </span>
                <span class="text-gray-600">Multilingual</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
