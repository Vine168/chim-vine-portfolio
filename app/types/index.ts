export interface NavItem {
  id: string
  label: string
}

export interface Profile {
  name: string
  role: string
  headline: string
  summary: string[]
  location: string
  availability: string
  portrait: string
  heroPortrait: string
  facts: Fact[]
}

export interface Fact {
  icon: string
  label: string
}

export interface Education {
  id: string
  period: string
  school: string
  degree: string
  summary: string
  detail?: string
  image: string
  courses: string[]
  achievements: string[]
}

export interface Experience {
  id: string
  period: string
  company: string
  role: string
  project: string
  summary: string
  stack: string[]
  highlights: string[]
  // A photo or screenshot in public/ (cropped to fill), a `logo` in public/
  // (shown whole), or an Iconify `icon` for work with no image to show.
  image?: string
  logo?: string
  icon?: string
}

export interface Skill {
  name: string
  // Iconify name, or `image` for a logo that ships as a file in public/.
  icon?: string
  image?: string
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  skills: Skill[]
}

export interface ContactChannel {
  label: string
  value: string
  // Omitted for details that are not a link, such as the address.
  href?: string
  icon: string
  external?: boolean
}

export interface Reference {
  name: string
  title: string
  organization: string
  // Publish only with the referee's consent: the site is public and indexed.
  phone?: string
  email?: string
}
