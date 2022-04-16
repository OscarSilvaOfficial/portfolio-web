<template>
  <v-app id="top" data-app>
    <BaseHeader :enabled="false" />
    <Intro :headline="linkedinProfile.headline" />
    <About :summary="linkedinProfile.summary" />
    <Resume
      :jobs="linkedinProfile.experiences"
      :educations="linkedinProfile.educations"
      :certifications="linkedinProfile.certifications"
    />
    <Portfolio :enabled="true" />
    <Cta :enabled="false" />
    <Services />
    <Contact />
    <BaseFooter />
    <BasePreloader />
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    linkedinProfile: {},
  }),
  async created() {
    this.linkedinProfile = await this.getLinkedinProfile()
  },
  methods: {
    async getLinkedinProfile() {
      return await this.$axios.$get(process.env.profilesURL)
    },
  },
}
</script>
<style>
html {
  font-size: 10px !important;
}

.theme--dark.v-application {
  color: unset !important;
}

.row {
  margin: 0 auto !important;
}
</style>