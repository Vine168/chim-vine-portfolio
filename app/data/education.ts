import type { Education } from '../types'

export const educationList: Education[] = [
  {
    id: 'cadt',
    period: 'Jan 2023 – Aug 2026',
    school: 'Cambodia Academy of Digital Technology',
    degree: 'Bachelor of Computer Science, specializing in Software Engineering',
    summary:
      'Software engineering, algorithms and modern web development, with practical work through school and capstone projects.',
    detail:
      'Covers software development methodologies, UI/UX design, systems analysis, databases and web and mobile application development. Applied Agile practices in team-based projects and gained production experience through an internship at Phillip Bank.',
    image: '/education/cadt.png',
    courses: [
      'Software Engineering',
      'Advanced Algorithms',
      'Web Application Development',
      'Advanced Mobile Development',
      'Database Administration',
      'Cloud Computing',
      'Artificial Intelligence',
      'Networks (CCNA)',
      'IT Essentials',
    ],
    achievements: [
      'Dean’s List for academic excellence',
      'Completed internship at Phillip Bank Cambodia',
      'Consistent GPA across years 1–3',
    ],
  },
  {
    id: 'high-school',
    period: 'Dec 2019 – Dec 2022',
    school: 'Sonny Wu Samrong Thom High School',
    degree: 'High School Diploma',
    summary:
      'Science and mathematics track, building the logical reasoning and problem-solving base for computer science.',
    image: '/education/sonny_wu_samrong_thom.png',
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'Earth Science',
      'English Literature',
      'Khmer Literature',
    ],
    achievements: [
      'Grade A in the national examination',
      'Bronze medal, MOSC (Grade 11)',
      'Outstanding student award — rank 4, Physics',
      'School prefect',
    ],
  },
  {
    id: 'primary',
    period: '2011 – 2016',
    school: 'Chey Mongkul Primary School',
    degree: 'Primary Education',
    summary:
      'Foundation in core subjects, with an early interest in mathematics and technology.',
    image: '/education/chey_mongkol.png',
    courses: ['Mathematics', 'Science', 'English', 'Khmer Language', 'Social Studies'],
    achievements: ['Graduated with distinction', 'Consistent top-of-class results'],
  },
  {
    id: 'competitions',
    period: '2020 – Present',
    school: 'Competitions & Certifications',
    degree: 'Ongoing technical and STEM programmes',
    summary:
      'Competitions and certifications outside the curriculum, used to keep current with practice and tooling.',
    detail:
      'Continuous learning through STEM competitions and professional certifications, with a focus on staying current with industry practice.',
    image: '/education/competition.png',
    courses: ['Echo Hero Clean-Up (STEM)'],
    achievements: [
      'Presented project work to a public audience',
      'Mentored peers on technical fundamentals',
    ],
  },
]
