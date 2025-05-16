<template>
  <section
    id="experience"
    class="relative py-32 px-8"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <div class="max-w-7xl mx-auto">
      <div
        class="text-center mb-16"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
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
          data-aos="height"
          data-aos-duration="1500"
        ></div>

        <!-- Timeline Items -->
        <div class="space-y-16">
          <template v-for="(experience, index) in experiences" :key="index">
            <div
              class="relative group"
              :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
              :data-aos-delay="index * 100"
              data-aos-duration="1000"
              :class="{
                'md:ml-auto md:pl-16': index % 2 === 0,
                'md:mr-auto md:pr-16': index % 2 === 1,
              }"
            >
              <div
                :class="{
                  'md:w-1/2': true,
                  'md:ml-auto md:pl-16': index % 2 === 0,
                  'md:mr-auto': index % 2 === 1,
                  'pl-8': true,
                }"
              >
                <!-- Timeline Dot -->
                <div
                  class="hidden md:block absolute left-0 md:left-[calc(50%-0.625rem)] top-0 w-5 h-5 rounded-full border-4 border-emerald-500 bg-white group-hover:scale-150 transition-transform duration-300"
                ></div>

                <div
                  class="relative bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div class="flex items-center justify-between mb-6">
                    <div
                      class="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full"
                    >
                      {{ experience.date }}
                    </div>
                    <div
                      class="w-full h-50 mt-4 rounded-xl overflow-hidden bg-gray-50"
                    >
                      <img
                        :src="experience.image"
                        :alt="experience.company"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 class="text-2xl font-bold text-gray-800 mb-2">
                    {{ experience.title }}
                  </h3>
                  <h4 class="text-lg font-semibold text-emerald-600 mb-4">
                    {{ experience.company }}
                  </h4>
                  <ul class="space-y-3">
                    <li
                      v-for="(task, taskIndex) in experience.tasks"
                      :key="taskIndex"
                      class="flex items-start"
                    >
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
                      <span class="text-gray-600">{{ task }}</span>
                    </li>
                  </ul>

                  <!-- Resources Section -->
                  <div
                    v-if="experience.resources && experience.resources.length"
                    class="mt-6 pt-6 border-t border-gray-100"
                  >
                    <h5 class="text-sm font-semibold text-gray-600 mb-3">
                      Project Resources
                    </h5>
                    <div class="flex flex-wrap gap-3">
                      <a
                        v-for="(
                          resource, resourceIndex
                        ) in experience.resources"
                        :key="resourceIndex"
                        :href="resource.link"
                        target="_blank"
                        class="inline-flex items-center px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                      >
                        <i :class="resource.icon" class="text-xl mr-2"></i>
                        <span class="text-sm">{{ resource.label }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    date: "05th May 2025 - 04 August 2025",
    image: "/experience/phillip-bank.png",
    company: "Phillip Bank Cambodia",
    title: "Full-Stack Developer - Internship",
    tasks: [
      "Project : Build Web Application for Phillip Bank",
      "Teachnologies: NestJS, NuxtJS, Tailwind CSS, PostgreSQL",
      "Implemented CI/CD pipelines improving deployment efficiency",
    ],
    resources: [
      {
        link: "https://github.com/your-repo/phillip-bank-project",
        icon: "fab fa-github",
        label: "Source Code",
      },
      {
        link: "/experience/documents/phillip-bank-report.pdf",
        icon: "fas fa-file-pdf",
        label: "Project Report",
      },
      {
        link: "https://phillip-bank-demo.example.com",
        icon: "fas fa-external-link-alt",
        label: "Live Demo",
      },
    ],
  },
  {
    date: "01st January 2025 - 09th April 2025",
    image: "/experience/cadt-capstone.png",
    company: "CADT - Capstone Project",
    title: "Frontend Developer",
    tasks: [
      "Project : Pregnancy Web Application Management System",
      "Technologies: ReactJS, Tailwind CSS, NodeJS, MongoDB",
      "Implemented responsive designs and optimized performance",
    ],
    resources: [
      {
        link: "https://github.com/your-repo/cadt-capstone",
        icon: "fab fa-github",
        label: "Source Code",
      },
      {
        link: "/experience/documents/capstone-documentation.pdf",
        icon: "fas fa-file-pdf",
        label: "Documentation",
      },
      {
        link: "/experience/documents/capstone-presentation.pdf",
        icon: "fas fa-presentation",
        label: "Presentation",
      },
    ],
  },
  {
    date: "1st December 2024 - Present",
    image: "/experience/vine.png",
    company: "Personal Project",
    title: "Full-Stack Developer",
    tasks: [
      "Project : Nites App",
      "Technologies: Flutter, Firebase",
      "Mobile App to support in Grade 12 students",
    ],
    resources: [
      {
        link: "https://github.com/your-repo/vine-project",
        icon: "fab fa-github",
        label: "Source Code",
      },
      {
        link: "https://vine-demo.example.com",
        icon: "fas fa-external-link-alt",
        label: "Live Demo",
      },
      {
        link: "/experience/documents/vine-architecture.pdf",
        icon: "fas fa-sitemap",
        label: "Architecture",
      },
      {
        link: "https://www.youtube.com/watch?v=demo-video",
        icon: "fab fa-youtube",
        label: "Demo Video",
      },
    ],
  },
  {
    date: "19th June 2023 - 09th May 2025",
    image: "/experience/start-up-community.png",
    company: "Start Up Community",
    title: "Maths Teacher",
    tasks: [
      "Taught mathematics to high school students",
      "Shared knowledge of background in mathematics and give advice",
      "Developed engaging lesson plans and assessments",
    ],
    resources: [
      // {
      //   link: "https://github.com/your-repo/cadt-capstone",
      //   icon: "fab fa-github",
      //   label: "Source Code",
      // },
      {
        link: "/experience/documents/capstone-documentation.pdf",
        icon: "fas fa-file-pdf",
        label: "Documentation",
      },
      {
        link: "/experience/documents/capstone-presentation.pdf",
        icon: "fas fa-presentation",
        label: "Presentation",
      },
    ],
  },
];
</script>

<style scoped>
.bg-gray-50 {
  background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}

.hover\:bg-emerald-50:hover {
  background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
}
</style>
