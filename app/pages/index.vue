<script setup lang="ts">
import { profile } from '~/data/profile'
import { contactChannels } from '~/data/contact'
import { skillGroups } from '~/data/skills'

const siteUrl = useRuntimeConfig().public.siteUrl
const description = `${profile.name} — ${profile.role} in ${profile.location}. ${profile.headline}`
const ogImage = `${siteUrl}${profile.heroPortrait}`

useSeoMeta({
  title: `${profile.name} — ${profile.role}`,
  description,
  ogTitle: `${profile.name} — ${profile.role}`,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: siteUrl,
  ogImage,
  ogImageAlt: `Portrait of ${profile.name}`,
  twitterCard: 'summary_large_image',
  twitterTitle: `${profile.name} — ${profile.role}`,
  twitterDescription: description,
  twitterImage: ogImage,
})

// Structured data lets search engines render a person/knowledge panel entry.
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.role,
        description,
        image: ogImage,
        url: siteUrl,
        email: `mailto:${contactChannels[0]?.value}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Phnom Penh',
          addressCountry: 'KH',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Cambodia Academy of Digital Technology',
        },
        knowsAbout: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
        sameAs: contactChannels.filter((c) => c.external).map((c) => c.href),
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <EducationSection />
    <ReferencesSection />
    <ContactSection />
  </div>
</template>
