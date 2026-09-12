import type { ContactChannel } from '../types'

export const email = 'chimvine777@gmail.com'

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    icon: 'lucide:mail',
  },
  {
    label: 'Phone',
    value: '+855 88 483 4024',
    href: 'tel:+855884834024',
    icon: 'lucide:phone',
  },
  {
    label: 'Address',
    value: 'Tuek Thla, Sen Sok, Phnom Penh, Cambodia',
    icon: 'lucide:map-pin',
  },
  {
    label: 'LinkedIn',
    value: 'Chim Vine',
    href: 'https://www.linkedin.com/in/chim-vine-b40362293/',
    icon: 'simple-icons:linkedin',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Vine168',
    href: 'https://github.com/Vine168',
    icon: 'simple-icons:github',
    external: true,
  },
  {
    label: 'Telegram',
    value: '@chimvine',
    href: 'https://t.me/chimvine',
    icon: 'simple-icons:telegram',
    external: true,
  },
]

/** Subset shown in the footer. */
export const socialChannels = contactChannels.filter((channel) => channel.external)
