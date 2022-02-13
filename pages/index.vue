<template>
  <div id="top">
    <BaseHeader :enabled="false" />
    <Intro :headline="linkedinProfile.headline" />
    <About :summary="linkedinProfile.summary" />
    <Resume
      :jobs="linkedinProfile.experiences"
      :educations="linkedinProfile.educations"
      :certifications="linkedinProfile.certifications"
    />
    <Portfolio :enabled="false" />
    <Cta :enabled="false" />
    <Services :enabled="false" />
    <Contact :enable-contact-form='false' />
    <BaseFooter />
    <BasePreloader />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    linkedinProfile: {},
  }),
  async mounted() {
    const profile = await this.getLinkedinProfile()
    this.linkedinProfile = profile
  },
  methods: {
    async getLinkedinProfile() {
      return await this.$axios.$get('http://localhost:8000')
    },
  },
}
</script>
