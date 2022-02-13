<template>
  <section v-show="enabled" id="intro">
    <div class="intro-overlay"></div>

    <div class="intro-content">
      <div class="row">
        <div class="col-twelve">
          <h5>Hello, World.</h5>
          <h1>Oscar da Silva.</h1>

          <p class="intro-position">
            <span>Senior FullStack Developer</span>
          </p>
        </div>
      </div>
    </div>
    <!-- /intro-content -->

    <ul class="intro-social">
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/dasilvaoscar/"><i class="fa fa-linkedin"></i></a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/OscarSilvaOfficial"><i class="fa fa-github"></i></a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    headline: {
      type: String,
      default: 'Senior Software Engineer',
    },
    enabled: {
      type: Boolean,
      default: true
    }
  }
}
</script>