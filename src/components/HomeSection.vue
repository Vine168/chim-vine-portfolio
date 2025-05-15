<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Elements -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-emerald-500/90 to-blue-600/90"
    >
  </div>
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"
      ></div>
      <div
        class="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <!-- Left Side - Text Content -->
      <div class="md:w-1/2 text-left">
        <h1
          class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Welcome to My Portfolio
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Full-Stack Developer
        </p>
        <p class="text-lg text-white/80 mb-12 max-w-2xl leading-relaxed">
          Passionate about creating beautiful and functional web applications,
          turning complex problems into elegant solutions.
        </p>
        <a
          href="#contact"
          class="inline-flex items-center px-8 py-4 text-lg font-medium text-emerald-600 bg-white rounded-full hover:bg-emerald-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl active:scale-100"
        >
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>

      <!-- Right Side - Profile Image -->
      <div class="md:w-1/2 flex justify-center">
        <div class="relative">
          <!-- Decorative Ring -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500 blur-lg opacity-50 animate-pulse"
          ></div>

          <!-- Image Container -->
          <div
            class="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/50 overflow-hidden shadow-2xl"
          >
            <!-- Replace the src with your image path -->
            <img
              src="/profile.png"
              alt="Profile"
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <!-- Decorative Dots -->
          <div class="absolute -right-8 top-1/2 transform -translate-y-1/2">
            <div class="w-3 h-3 bg-white rounded-full mb-2"></div>
            <div class="w-2 h-2 bg-white/80 rounded-full mb-2"></div>
            <div class="w-1 h-1 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        class="w-full h-auto"
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
</style>
