<script setup lang="ts">
const { fields, errors, status, submit } = useContactForm()

const inputClass =
  'w-full rounded-lg border border-ink-300 bg-white px-4 py-2.5 text-sm text-ink-900 transition-colors duration-200 placeholder:text-ink-400 hover:border-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20'
</script>

<template>
  <form class="space-y-5" novalidate @submit.prevent="submit">
    <div>
      <label for="contact-name" class="mb-1.5 block text-sm font-medium text-ink-800">
        Name
      </label>
      <input
        id="contact-name"
        v-model="fields.name"
        type="text"
        autocomplete="name"
        :class="[inputClass, errors.name && 'border-red-500']"
        :aria-invalid="Boolean(errors.name)"
        :aria-describedby="errors.name ? 'contact-name-error' : undefined"
      />
      <p v-if="errors.name" id="contact-name-error" class="mt-1.5 text-sm text-red-600">
        {{ errors.name }}
      </p>
    </div>

    <div>
      <label for="contact-email" class="mb-1.5 block text-sm font-medium text-ink-800">
        Email
      </label>
      <input
        id="contact-email"
        v-model="fields.email"
        type="email"
        autocomplete="email"
        :class="[inputClass, errors.email && 'border-red-500']"
        :aria-invalid="Boolean(errors.email)"
        :aria-describedby="errors.email ? 'contact-email-error' : undefined"
      />
      <p v-if="errors.email" id="contact-email-error" class="mt-1.5 text-sm text-red-600">
        {{ errors.email }}
      </p>
    </div>

    <div>
      <label for="contact-message" class="mb-1.5 block text-sm font-medium text-ink-800">
        Message
      </label>
      <textarea
        id="contact-message"
        v-model="fields.message"
        rows="5"
        :class="[inputClass, 'resize-y', errors.message && 'border-red-500']"
        :aria-invalid="Boolean(errors.message)"
        :aria-describedby="errors.message ? 'contact-message-error' : undefined"
      />
      <p
        v-if="errors.message"
        id="contact-message-error"
        class="mt-1.5 text-sm text-red-600"
      >
        {{ errors.message }}
      </p>
    </div>

    <BaseButton type="submit" block>Send message</BaseButton>

    <p class="text-xs text-ink-500">
      Opens the message in your email app — nothing is stored on this site.
    </p>

    <p v-if="status === 'sent'" role="status" class="text-sm text-brand-700">
      Your email app should now be open with the message ready to send.
    </p>
  </form>
</template>
