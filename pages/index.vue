<template>
  <div>
    <HomeSection />
    <AboutSection />
    <GithubProfileSection />
    <ContactSection />
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection/HomeSection'
import AboutSection from '@/components/AboutSection/AboutSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import GithubProfileSection from '@/components/GithubProfileSection/GithubProfileSection'

export default {
  components: {
    HomeSection,
    AboutSection,
    ContactSection,
    GithubProfileSection,
  },
}
</script>
