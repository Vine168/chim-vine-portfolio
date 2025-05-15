<template>
  <section
    id="contact"
    class="py-24 px-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
  >
    <!-- Decorative gradient orbs -->
    <div
      class="absolute -top-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
    ></div>
    <div
      class="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
    ></div>

    <div class="max-w-7xl mx-auto relative">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact Me
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div
          class="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500"
        >
          <h3 class="text-2xl text-emerald-500 mb-8 font-bold relative">
            Get in Touch
            <div
              class="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-blue-500"
            ></div>
          </h3>
          <p class="text-gray-700 mb-8">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          <div class="space-y-6">
            <div
              class="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div class="relative">
                <i
                  class="fas fa-envelope text-2xl text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                ></i>
                <div
                  class="absolute inset-0 bg-emerald-500/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"
                ></div>
              </div>
              <a
                href="mailto:chimvine777@gmail.com"
                class="text-gray-700 hover:text-emerald-500 transition-colors duration-300"
              >
                chimvine777@gmail.com
              </a>
            </div>
            <div
              class="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div class="relative">
                <i
                  class="fab fa-telegram text-2xl text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                ></i>
                <div
                  class="absolute inset-0 bg-emerald-500/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"
                ></div>
              </div>
              <a
                href="https://t.me/chimvine"
                target="_blank"
                class="text-gray-700 hover:text-emerald-500 transition-colors duration-300"
              >
                Telegram Account
              </a>
            </div>
            <div
              class="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div class="relative">
                <i
                  class="fab fa-linkedin text-2xl text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                ></i>
                <div
                  class="absolute inset-0 bg-emerald-500/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"
                ></div>
              </div>
              <a
                href="http://linkedin.com/in/vine-chim-b40362293"
                target="_blank"
                class="text-gray-700 hover:text-emerald-500 transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
            <div
              class="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div class="relative">
                <i
                  class="fab fa-github text-2xl text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                ></i>
                <div
                  class="absolute inset-0 bg-emerald-500/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"
                ></div>
              </div>
              <a
                href="https://github.com/Vine168"
                target="_blank"
                class="text-gray-700 hover:text-emerald-500 transition-colors duration-300"
              >
                GitHub Profile
              </a>
            </div>

            <div
              class="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div class="relative">
                <i
                  class="fab fa-phone-volume text-2xl text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                ></i>
                <div
                  class="absolute inset-0 bg-emerald-500/20 blur-lg scale-0 group-hover:scale-150 transition-transform duration-500"
                ></div>
              </div>
              <a
                href="#"
                target="_blank"
                class="text-gray-700 hover:text-emerald-500 transition-colors duration-300"
              >
                +855 88 483 4024
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form
          @submit.prevent="handleSubmit"
          class="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500"
        >
          <div class="mb-6 group">
            <label for="name" class="block text-gray-700 mb-2 font-medium"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500"
            />
          </div>
          <div class="mb-6 group">
            <label for="email" class="block text-gray-700 mb-2 font-medium"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500"
            />
          </div>
          <div class="mb-6 group">
            <label for="message" class="block text-gray-700 mb-2 font-medium"
              >Message</label
            >
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:border-emerald-500 resize-vertical"
            ></textarea>
          </div>
          <button
            type="submit"
            class="group relative w-full overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span class="relative z-10">Send Message</span>
            <div
              class="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-transform group-hover:scale-100 group-hover:translate-x-[50%] duration-1000 bg-gradient-to-r from-emerald-600 to-blue-600 group-hover:translate-y-[50%]"
            ></div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form.value);
  // Add your form submission logic here
};
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
