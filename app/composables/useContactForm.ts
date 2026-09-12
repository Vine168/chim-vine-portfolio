import { email as contactEmail } from '~/data/contact'

interface ContactFields {
  name: string
  email: string
  message: string
}

type FieldErrors = Partial<Record<keyof ContactFields, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * The site is fully static, so there is no inbox to POST to. Rather than a form
 * that silently discards input, submitting composes a prefilled email in the
 * visitor's own mail client.
 */
export function useContactForm() {
  const fields = reactive<ContactFields>({ name: '', email: '', message: '' })
  const errors = reactive<FieldErrors>({})
  const status = ref<'idle' | 'sent'>('idle')

  const validate = (): boolean => {
    errors.name = fields.name.trim() ? undefined : 'Please enter your name.'
    errors.email = !fields.email.trim()
      ? 'Please enter your email address.'
      : EMAIL_PATTERN.test(fields.email.trim())
        ? undefined
        : 'Please enter a valid email address.'
    errors.message = fields.message.trim() ? undefined : 'Please write a short message.'

    return !errors.name && !errors.email && !errors.message
  }

  const submit = () => {
    status.value = 'idle'
    if (!validate()) return

    const subject = `Portfolio enquiry from ${fields.name.trim()}`
    const body = `${fields.message.trim()}\n\n—\n${fields.name.trim()}\n${fields.email.trim()}`

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    status.value = 'sent'
  }

  return { fields, errors, status, submit }
}
