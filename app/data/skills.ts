import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Web interfaces, admin dashboards and mobile apps.',
    skills: [
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
      { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'HTML5', icon: 'simple-icons:html5' },
      { name: 'CSS3', icon: 'simple-icons:css3' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Flutter', icon: 'simple-icons:flutter' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'REST APIs, authentication and business logic.',
    skills: [
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Express', image: '/skills/express.svg' },
      { name: 'REST APIs', icon: 'lucide:webhook' },
      { name: 'Laravel', icon: 'simple-icons:laravel' },
    ],
  },
  {
    id: 'data',
    title: 'Databases & ORM',
    description: 'Relational and document data, and the ORM on top.',
    skills: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'Prisma', icon: 'simple-icons:prisma' },
      { name: 'Firebase', icon: 'simple-icons:firebase' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Containers, reverse proxies and release pipelines.',
    skills: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Portainer', icon: 'simple-icons:portainer' },
      { name: 'Nginx', icon: 'simple-icons:nginx' },
      { name: 'CI/CD', icon: 'lucide:infinity' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Version control, API testing and design.',
    skills: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'Postman', icon: 'simple-icons:postman' },
      { name: 'Figma', icon: 'simple-icons:figma' },
      { name: 'Swagger', icon: 'simple-icons:swagger' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft skills',
    description: 'How I work with a team and to a deadline.',
    skills: [
      { name: 'Teamwork', icon: 'lucide:users' },
      { name: 'Problem Solving', icon: 'lucide:puzzle' },
      { name: 'Communication', icon: 'lucide:message-circle' },
      { name: 'Time Management', icon: 'lucide:timer' },
    ],
  },
]
