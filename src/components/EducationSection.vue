<template>
  <section
    id="education"
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
          Education
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"
        ></div>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(education, index) in educationList"
          :key="index"
          class="group"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
          data-aos-duration="1000"
        >
          <div
            class="relative bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            @click="openModal(education)"
          >
            <div
              class="absolute -top-4 left-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full"
            >
              {{ education.period }}
            </div>
            <h3
              class="text-2xl font-bold text-gray-800 mt-4 mb-2 group-hover:text-emerald-500 transition-colors"
            >
              {{ education.school }}
            </h3>
            <p class="text-lg font-semibold text-emerald-600 mb-4">
              {{ education.degree }}
            </p>
            <p class="text-gray-600 leading-relaxed">
              {{ education.description }}
            </p>
            <ul class="mt-6 space-y-2">
              <li
                v-for="(course, courseIndex) in education.courses.slice(0, 3)"
                :key="courseIndex"
                class="flex items-center text-gray-600"
              >
                <svg
                  class="w-5 h-5 mr-2 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ course }}
              </li>
            </ul>
            <div
              class="mt-6 text-emerald-500 font-medium flex items-center group-hover:text-emerald-600"
            >
              <span>Learn More</span>
              <svg
                class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Dialog -->
    <div
      v-if="selectedEducation"
      class="fixed inset-0 z-50 overflow-y-auto mt-14"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!-- Background overlay -->
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="closeModal"
        ></div>

        <!-- Modal panel -->
        <div
          class="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
          :class="{
            'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95':
              !isModalOpen,
            'opacity-100 translate-y-0 sm:scale-100': isModalOpen,
          }"
        >
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              @click="closeModal"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <!-- School Logo/Image -->
              <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left flex-grow">
                <div
                  class="bg-gradient-to-br from-emerald-500 to-blue-500 w-full h-60 rounded-xl mb-6 overflow-hidden"
                >
                  <img
                    :src="selectedEducation.image"
                    :alt="selectedEducation.school"
                    class="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>

                <h3
                  class="text-3xl leading-6 font-bold text-gray-900 mb-4"
                  id="modal-title"
                >
                  {{ selectedEducation.school }}
                </h3>

                <div
                  class="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full inline-block mb-4 font-medium"
                >
                  {{ selectedEducation.period }}
                </div>

                <p class="text-xl font-semibold text-emerald-600 mb-4">
                  {{ selectedEducation.degree }}
                </p>

                <div class="prose prose-emerald max-w-none">
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    {{ selectedEducation.fullDescription }}
                  </p>

                  <div class="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 class="text-lg font-semibold text-gray-800 mb-3">
                        Key Courses
                      </h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(course, index) in selectedEducation.courses"
                          :key="index"
                          class="flex items-center text-gray-600"
                        >
                          <svg
                            class="w-5 h-5 mr-2 text-emerald-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          {{ course }}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 class="text-lg font-semibold text-gray-800 mb-3">
                        Achievements
                      </h4>
                      <ul class="space-y-2">
                        <li
                          v-for="(
                            achievement, index
                          ) in selectedEducation.achievements"
                          :key="index"
                          class="flex items-start text-gray-600"
                        >
                          <svg
                            class="w-5 h-5 mr-2 mt-1 text-emerald-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          {{ achievement }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedEducation = ref(null);
const isModalOpen = ref(false);

const educationList = [
  {
    period: "2023 - Present",
    school: "Cambodia Academy of Digital Technology",
    degree: "Bachelor of Computer Science",
    description:
      "Studying computer science with focus on Software Engineering, algorithms, and modern web technologies.",
    fullDescription:
      "Pursuing a comprehensive program in Computer Science, focusing on both theoretical foundations and practical applications. Actively, developing expertise in software development and problem-solving.",
    image: "/education/cadt.png",
    courses: [
      "IT Essentials",
      "Personal Development & Critical thinking",
      "Networks (CCNA)",
      "Advanced Algorithms",
      "Artificial Intelligence",
      "Cloud Computing",
      "Basic Robotic",
      "Web Application ",
      "Software Engineering",
      "Advanced Mobile Development",
      "Database Administration"
    ],
    achievements: [
      "Dean's List for Academic Excellence",
      "Passed internship at Phillip Bank",
      "Good GPA for year 1 ,2 and 3",
      "Learn more about the field of Computer Science",
    ],
  },
  {
    period: "2017 - 2022",
    school: "Sonny Wu Samrong Thom High School",
    degree: "Secondary Education & Upper Secondary Education",
    description:
      "Completed secondary education and upper secondary education with a focus on science and technology.",
    fullDescription:
      "",
    image: "/education/sonny_wu_samrong_thom.png",
    courses: [
      "Mathematics",
      "Khmer Literature",
      "Biology",
      "Physics",
      "Chemistry",
      "English Literature",
      "History",
      "Civic Instruction",
      "Geography",
      "Earth Science",
      "Home Economics",
      "Physical Education",
    ],
    achievements: [
      "School Prefect",
      "Grade A in National Examination",
      "Bronze Medal in MOSC in grade 11",
      "Outstanding Student Award rank 4 (Physic)",
      //   "Best Student in Computer Science",
    ],
  },
  {
    period: "2011 - 2016",
    school: "Chey Mongkul Primary School",
    degree: "Primary Education",
    description:
      "Built strong foundation in core subjects and discovered passion for High School.",
    fullDescription:
      "Completed primary education with distinction, showing early interest in mathematics and technology.",
    image: "/education/chey_mongkol.png",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Khmer Language",
      "Social Studies",
      "Arts",
      "Physical Education",
      "Sport",
    ],
    achievements: [
      "First Place in start learning",
      "Good grade in all subjects",
      "Outstanding student in the class",
      //   "Student Council Member",
    ],
  },
  {
    period: "2020 - Present",
    school: "Competitions & Certifications",
    degree: "Various Technical Certifications",
    description:
      "Actively participating in competitions and earning professional certifications.",
    fullDescription:
      "Continuously improving skills through competitions, and professional certifications. Focused on staying current with industry trends and best practices.",
    image: "/education/competition.png",
    courses: [
      "Echo Hero Clean-Up (STEM)",
      // "Google IT Support",
      // "Microsoft Azure Fundamentals",
      // "CompTIA A+",
      // "Web Development Bootcamp",
      // "AI/ML Specialization",
    ],
    achievements: [
      "Improve public speaking skills",
      "Shared knowledge with peers",
      "Learn more about the field of Computer Science",
      // "Google Kickstart Round E Participant",
      // "AWS Certified Developer",
      // "",
    ],
  },
];

const openModal = (education) => {
  selectedEducation.value = education;
  setTimeout(() => {
    isModalOpen.value = true;
  }, 50);
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => {
    selectedEducation.value = null;
  }, 300);
};
</script>

<style scoped>
.transform {
  transform: translateZ(0);
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter-active {
  animation: modal-in 0.3s ease-out;
}
</style>
