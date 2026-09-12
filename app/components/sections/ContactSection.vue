<template>
  <section id="contact" class="section bg-ink-50/60" aria-labelledby="contact-title">
    <div class="section-inner">
      <SectionHeader
        id="contact-title"
        eyebrow="Contact"
        title="Let’s work together"
        description="I’m open to full-stack and frontend roles, freelance work and collaboration. The fastest way to reach me is email or Telegram."
      />

      <div class="grid gap-10 md:grid-cols-2 md:gap-16">
        <div v-reveal class="rounded-card border border-ink-200 bg-white p-4 sm:p-6">
          <h3 class="px-4 pb-2 text-sm font-semibold tracking-wide text-ink-900 uppercase">
            Contact details
          </h3>
          <ContactChannels />
        </div>

        <div v-reveal="100">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>
