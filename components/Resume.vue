<template>
  <section v-show="enabled" id="resume" class="grey-section">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Carreira</h5>
        <h1>Um pouca das minhas conquistas.</h1>
      </div>
    </div>
    <!-- /section-intro-->

    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Experiências de carreira</h2>
      </div>
      <!-- /resume-header -->

      <div v-for="job in jobs" :key="job.id" class="col-twelve">
        <div class="timeline-wrap">
          <div class="timeline-block">
            <div class="timeline-ico">
              <img v-if="job.logo_url" :src="job.logo_url" class="logo-radius">
              <i v-else class="fa fa-graduation-cap"></i>
            </div>

            <div class="timeline-header">
              <h3>{{ job.title }}</h3>
              <p>{{ getFormatedDate(job.starts_at) }}</p>
            </div>

            <div class="timeline-content">
              <h4>{{ job.company }}</h4>
              <p>{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- /col-twelve -->
    </div>
    <!-- /resume-timeline -->

    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Graduações</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline-wrap">
          <div v-for="education in educations" :key="education.id" class="timeline-block">
            <div class="timeline-ico">
              <img v-if="education.logo_url" :src="education.logo_url" class="logo-radius">
              <i v-else class="fa fa-briefcase"></i>
            </div>

            <div class="timeline-header">
              <h3>{{ education.school }} </h3>
              <p>{{ getFormatedDate(education.starts_at) }} - {{ getFormatedDate(education.ends_at) }}</p>
            </div>

            <div class="timeline-content">
              <h4>{{ education.degree_name }} | {{ education.field_of_study }}</h4>
              <p>{{ education.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row resume-timeline">
      <div class="col-twelve resume-header">
        <h2>Certificados</h2>
      </div>
      <div class="col-twelve">
        <div class="timeline-wrap">
          <div v-for="certification in certifications" :key="certification.id" class="timeline-block">
            <div class="timeline-ico">
              <img v-if="getIcon(certification.authority)" :src="getIcon(certification.authority)" class="logo-radius">
              <i v-else class="fa fa fa-graduation-cap"></i>
            </div>

            <div class="timeline-header">
              <h3>{{ certification.authority }} </h3>
            </div>

            <div class="timeline-content">
              <h4>{{ certification.name }}</h4>
              <p v-show="certification.license_number">
                <span>Número da licença:</span> 
                <a :href="certification.url" class="cursor-pointer" target="_blank">{{  certification.license_number }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: true,
    },
    jobs: {
      type: Array,
      default: () => [],
    },
    educations: {
      type: Array,
      default: () => [],
    },
    certifications: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getFormatedDate: (date) => `
      ${date.day <= 9 ? '0' + date.day : date.day }/${date.month <= 9 ? '0' + date.month : date.month}/${date.year}
    `,
    getIcon: (authority) => {
      let icon = require('@/assets/icons/default.jpg')
      authority = authority.toLowerCase();

      if (authority.includes('udemy')) icon = require('@/assets/icons/udemy.png')
      if (authority.includes('alura')) icon = require('@/assets/icons/alura.png')
      if (authority.includes('bradesco')) icon = require('@/assets/icons/bradesco.jpeg')

      return icon
    }
  },
}
</script>
<style lang="scss" scoped>
.logo-radius {
  border-radius: 20%;
}
.cursor-pointer {
  cursor: pointer;
}
</style>