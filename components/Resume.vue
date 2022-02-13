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
              <p>{{ getBeginDate(job) }}</p>
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
              <p>{{ getBeginDate(education) }} - {{ getEndDate(education) }}</p>
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
              <i class="fa fa-briefcase"></i>
            </div>

            <div class="timeline-header">
              <h3>{{ certification.authority }} </h3>
            </div>

            <div class="timeline-content">
              <h4>{{ certification.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang='ts'>
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
    getBeginDate(date: any) {
      return `${date.starts_at.day <= 9 ? '0'+date.starts_at.day : date.starts_at.day }/${date.starts_at.month <= 9 ? '0'+date.starts_at.month : date.starts_at.month}/${date.starts_at.year}`; 
    },
    getEndDate(date: any) {
      return `${date.ends_at.day <= 9 ? '0'+date.ends_at.day : date.ends_at.day }/${date.ends_at.month <= 9 ? '0'+date.ends_at.month : date.ends_at.month}/${date.ends_at.year}`; 
    },
  },
}
</script>
<style lang="scss" scoped>
.logo-radius {
  border-radius: 20%;
}
</style>