<template>
  <section id="experience" class="relative py-32 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Experience
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"
        ></div>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"
        ></div>

        <!-- Timeline Items -->
        <div class="space-y-16">
          <!-- Senior Developer -->
          <div class="relative group">
            <div class="md:w-1/2 md:ml-auto md:pl-16 pl-8">
              <!-- Timeline Dot -->
              <div
                class="hidden md:block absolute left-0 md:left-[calc(50%-0.625rem)] top-0 w-5 h-5 rounded-full border-4 border-emerald-500 bg-white group-hover:scale-150 transition-transform duration-300"
              ></div>

              <div
                class="relative bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] transition-all duration-300 hover:-translate-y-2"
              >
                <!-- Company Image & Date -->
                <div class="flex items-center justify-between mb-6">
                  <div
                    class="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full"
                  >
                    05th May 2025 - 04 August 2025
                  </div>
                  <div
                    class="w-full h-50 mt-4 rounded-xl overflow-hidden bg-gray-50"
                  >
                    <img
                      src="/experience/phillip-bank.png"
                      alt="Phillip Bank"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  Full-Stack Developer - Internship
                </h3>
                <h4 class="text-lg font-semibold text-emerald-600 mb-4">
                  Phillip Bank Cambodia
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Led development of key features for enterprise
                      applications</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Mentored junior developers and conducted code
                      reviews</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Implemented CI/CD pipelines improving deployment
                      efficiency</span
                    >
                  </li>
                </ul>

                <!-- Resources Section -->
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <h5 class="text-sm font-semibold text-gray-600 mb-3">
                    Project Resources
                  </h5>
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/your-repo/phillip-bank-project"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fab fa-github text-xl mr-2"></i>
                      <span class="text-sm">Source Code</span>
                    </a>
                    <a
                      href="/experience/documents/phillip-bank-report.pdf"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-file-pdf text-xl mr-2"></i>
                      <span class="text-sm">Project Report</span>
                    </a>
                    <a
                      href="https://phillip-bank-demo.example.com"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-external-link-alt text-xl mr-2"></i>
                      <span class="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Software Developer -->
          <div class="relative group">
            <div class="md:w-1/2 md:mr-auto md:pr-16 pl-8 md:pl-0">
              <!-- Timeline Dot -->
              <div
                class="hidden md:block absolute left-0 md:left-[calc(50%-0.625rem)] top-0 w-5 h-5 rounded-full border-4 border-emerald-500 bg-white group-hover:scale-150 transition-transform duration-300"
              ></div>

              <div
                class="relative bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] transition-all duration-300 hover:-translate-y-2"
              >
                <!-- Company Image & Date -->
                <div class="flex items-center justify-between mb-6">
                  <div
                    class="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full"
                  >
                    01st January 2025 - 09th April 2025
                  </div>
                  <div
                    class="w-full h-50 mt-4 rounded-xl overflow-hidden bg-gray-50"
                  >
                    <img
                      src="/experience/cadt-capstone.png"
                      alt="CADT"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  Frontend Developer
                </h3>
                <h4 class="text-lg font-semibold text-emerald-600 mb-4">
                  CADT - Capstone Project
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Developed and maintained full-stack web
                      applications</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Collaborated with cross-functional teams to deliver
                      projects</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Implemented responsive designs and optimized
                      performance</span
                    >
                  </li>
                </ul>

                <!-- Resources Section -->
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <h5 class="text-sm font-semibold text-gray-600 mb-3">
                    Project Resources
                  </h5>
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/your-repo/cadt-capstone"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fab fa-github text-xl mr-2"></i>
                      <span class="text-sm">Source Code</span>
                    </a>
                    <a
                      href="/experience/documents/capstone-documentation.pdf"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-file-pdf text-xl mr-2"></i>
                      <span class="text-sm">Documentation</span>
                    </a>
                    <a
                      href="/experience/documents/capstone-presentation.pdf"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-presentation text-xl mr-2"></i>
                      <span class="text-sm">Presentation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div class="md:w-1/2 md:ml-auto md:pl-16 pl-8">
              <!-- Timeline Dot -->
              <div
                class="hidden md:block absolute left-0 md:left-[calc(50%-0.625rem)] top-0 w-5 h-5 rounded-full border-4 border-emerald-500 bg-white group-hover:scale-150 transition-transform duration-300"
              ></div>

              <div
                class="relative bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] transition-all duration-300 hover:-translate-y-2"
              >
                <!-- Project Image & Date -->
                <div class="flex items-center justify-between mb-6">
                  <div
                    class="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full"
                  >
                    1st December 2024 - Present
                  </div>
                  <div
                    class="w-full h-50 mt-4 rounded-xl overflow-hidden bg-gray-50"
                  >
                    <img
                      src="/experience/vine.png"
                      alt="Personal Project"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  Full-Stack Developer
                </h3>
                <h4 class="text-lg font-semibold text-emerald-600 mb-4">
                  Personal Project
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Led development of key features for enterprise
                      applications</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Mentored junior developers and conducted code
                      reviews</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Implemented CI/CD pipelines improving deployment
                      efficiency</span
                    >
                  </li>
                </ul>

                <!-- Resources Section -->
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <h5 class="text-sm font-semibold text-gray-600 mb-3">
                    Project Resources
                  </h5>
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/your-repo/vine-project"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fab fa-github text-xl mr-2"></i>
                      <span class="text-sm">Source Code</span>
                    </a>
                    <a
                      href="https://vine-demo.example.com"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-external-link-alt text-xl mr-2"></i>
                      <span class="text-sm">Live Demo</span>
                    </a>
                    <a
                      href="/experience/documents/vine-architecture.pdf"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-sitemap text-xl mr-2"></i>
                      <span class="text-sm">Architecture</span>
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=demo-video"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fab fa-youtube text-xl mr-2"></i>
                      <span class="text-sm">Demo Video</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Software Developer -->
          <div class="relative group">
            <div class="md:w-1/2 md:mr-auto md:pr-16 pl-8 md:pl-0">
              <!-- Timeline Dot -->
              <div
                class="hidden md:block absolute left-0 md:left-[calc(50%-0.625rem)] top-0 w-5 h-5 rounded-full border-4 border-emerald-500 bg-white group-hover:scale-150 transition-transform duration-300"
              ></div>

              <div
                class="relative bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] transition-all duration-300 hover:-translate-y-2"
              >
                <!-- Company Image & Date -->
                <div class="flex items-center justify-between mb-6">
                  <div
                    class="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full"
                  >
                    19th June 2023 - 09th May 2025
                  </div>
                  <div
                    class="w-full h-50 mt-4 rounded-xl overflow-hidden bg-gray-50"
                  >
                    <img
                      src="/experience/start-up-community.png"
                      alt="start-up"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  Maths Teacher
                </h3>
                <h4 class="text-lg font-semibold text-emerald-600 mb-4">
                  Start Up Community
                </h4>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Developed and maintained full-stack web
                      applications</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Collaborated with cross-functional teams to deliver
                      projects</span
                    >
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-6 h-6 mr-2 text-emerald-500 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span class="text-gray-600"
                      >Implemented responsive designs and optimized
                      performance</span
                    >
                  </li>
                </ul>

                <!-- Resources Section -->
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <h5 class="text-sm font-semibold text-gray-600 mb-3">
                    Project Resources
                  </h5>
                  <div class="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/your-repo/cadt-capstone"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fab fa-github text-xl mr-2"></i>
                      <span class="text-sm">Source Code</span>
                    </a>
                    <a
                      href="/experience/documents/capstone-documentation.pdf"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-file-pdf text-xl mr-2"></i>
                      <span class="text-sm">Documentation</span>
                    </a>
                    <a
                      href="/experience/documents/capstone-presentation.pdf"
                      target="_blank"
                      class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                    >
                      <i class="fas fa-presentation text-xl mr-2"></i>
                      <span class="text-sm">Presentation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional experience items can be added following the same pattern -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script changes required
</script>

<style scoped>
.bg-gray-50 {
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

.hover\:bg-emerald-50:hover {
  background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
}
</style>
