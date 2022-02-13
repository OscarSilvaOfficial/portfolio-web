<template>
  <div id="top">
    <BaseHeader :enabled="false" />
    <Intro :headline="linkedinProfile.headline" />
    <About :summary="linkedinProfile.summary" />
    <Resume :jobs="linkedinProfile.experiences" :educations="linkedinProfile.educations" />
    <Portfolio :enabled="false" />
    <Cta />
    <Services />
    <Contact />
    <BaseFooter />
    <BasePreloader />
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
  data:() => ({
    linkedinProfile: {},
  }),
  async created() {
    this.linkedinProfile = { ...await this.getLinkedinProfile() }
    console.log(this.linkedinProfile);
  },
  methods: {
    async getLinkedinProfile() {
      return await this.$axios.$get('http://localhost:8000')
    },
  },
}
</script>
