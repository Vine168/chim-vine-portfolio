<template>
  <section
    id="home"
    class="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0"
  >
    <!-- Background Elements -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-emerald-500/90 to-blue-600/90"
    >
  </div>
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 -left-4 w-48 md:w-72 h-48 md:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"
      ></div>
      <div
        class="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
    >
      <!-- Left Side - Text Content -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight"
          data-aos="fade-right"
        >
          Welcome to My Portfolio
        </h1>
        <p
          class="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 md:mb-8 font-light"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Full-Stack Developer
        </p>
        
        <!-- <a
          href="#contact"
          class="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-emerald-600 bg-white rounded-full hover:bg-emerald-50 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg active:scale-100"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 md:h-3.5 md:w-3.5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a> -->
      </div>

      <!-- Right Side - Profile Image -->
      <div
        class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        data-aos="zoom-in"
      >
        <div class="relative">
          <!-- Decorative Ring -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 blur-lg opacity-50 animate-pulse"
          ></div>

          <!-- Image Container -->
          <div
            class="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src="/profile.png"
              alt="Profile"
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <!-- Decorative Dots -->
          <div
            class="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2"
          >
            <div class="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full mb-2"></div>
            <div
              class="w-1.5 md:w-2 h-1.5 md:h-2 bg-white/80 rounded-full mb-2"
            ></div>
            <div class="w-1 h-1 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        class="w-full h-auto"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
</template>

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

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Ensure the wave SVG scales properly */
svg {
  width: 100%;
  height: auto;
  display: block;
}
</style>
