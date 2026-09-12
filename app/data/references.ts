import type { Reference } from '../types'

// Phone numbers and emails are left out on purpose: this page is public and
// crawled, so referees' details are shared on request. Add `phone` / `email`
// to an entry once that referee agrees, and the card will show them.
export const references: Reference[] = [
  {
    name: 'Mr. Koeut Vanna',
    title: 'Manager, Web Development',
    organization: 'Phillip Bank',
  },
  {
    name: 'Mr. Thea Sophal',
    title: 'Researcher and Lecturer',
    organization: 'Cambodia Academy of Digital Technology (CADT)',
  },
]
