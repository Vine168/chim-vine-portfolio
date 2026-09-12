import type { NavItem, Profile } from '../types'

export const navigation: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const profile: Profile = {
  name: 'Chim Vine',
  role: 'Full-Stack Developer',
  headline:
    'I build web applications, REST APIs and admin dashboards — from the database through to deployment.',
  summary: [
    'I’m a full-stack developer and Computer Science student specializing in Software Engineering at the Cambodia Academy of Digital Technology (CADT). I build web applications, REST APIs, admin dashboards and database-driven systems, and the deployment workflows that ship them — using React, NestJS, Node.js, PostgreSQL, MySQL, Docker and CI/CD.',
    'At Bongkert Solution I’ve contributed to production platforms for the private and public sector, among them a delivery platform, a Ministry of Interior association management system and a Khmer/English map service. Before that I interned at Phillip Bank, rebuilding the static Phillip Trustee website into a dynamic content-management platform.',
  ],
  location: 'Phnom Penh, Cambodia',
  availability: 'Open to full-stack and frontend roles',
  portrait: '/profile.png',
  heroPortrait: '/profile-main.png',
  facts: [
    { icon: 'lucide:map-pin', label: 'Phnom Penh, Cambodia' },
    { icon: 'lucide:graduation-cap', label: 'Bachelor of Computer Science, CADT' },
    { icon: 'lucide:code-2', label: 'Full-stack: React / NestJS / PostgreSQL' },
    { icon: 'lucide:languages', label: 'Khmer (native), English (professional)' },
  ],
}
