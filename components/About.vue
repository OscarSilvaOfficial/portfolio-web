<template>
  <section v-show="enabled" id="about">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Sobre</h5>
        <h1>Gostaria de falar um pouco sobre mim.</h1>
      </div>
    </div>
    <!-- /section-intro -->

    <div class="row about-content">
      <div class="col-six tab-full">
        <ul class="info-list">
          <li>
            <strong>Vamos lá:</strong>
            <p class="lead">
              {{ summary }}
            </p>
          </li>
        </ul>
        <ul class="info-list">
          <li>
            <strong>Skills:</strong>
          </li>
        </ul>
        <ul class="skill-bars">
          <li>
            <div class="progress percent75"><span>75%</span></div>
            <strong>RabbitMQ</strong>
          </li>
          <li>
            <div class="progress percent85"><span>85%</span></div>
            <strong>Node</strong>
          </li>
          <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>MySQL</strong>
          </li>
          <li>
            <div class="progress percent80"><span>80%</span></div>
            <strong>Mongo</strong>
          </li>
          <li>
            <div class="progress percent75"><span>75%</span></div>
            <strong>Datastore</strong>
          </li>
        </ul>
      </div>

      <div class="col-six tab-full">
        <ul class="skill-bars">
          <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>Python</strong>
          </li>
          <li>
            <div class="progress percent85"><span>85%</span></div>
            <strong>Vue</strong>
          </li>
          <li>
            <div class="progress percent85"><span>85%</span></div>
            <strong>Typescript</strong>
          </li>
          <li>
            <div class="progress percent90"><span>90%</span></div>
            <strong>Docker</strong>
          </li>
          <li>
            <div class="progress percent80"><span>80%</span></div>
            <strong>Clean Architecture</strong>
          </li>
          <li>
            <div class="progress percent70"><span>70%</span></div>
            <strong>AWS</strong>
          </li>
          <li>
            <div class="progress percent75"><span>75%</span></div>
            <strong>Gcloud</strong>
          </li>
          <li>
            <div class="progress percent85"><span>85%</span></div>
            <strong>CloudTasks</strong>
          </li>
          <li>
            <div class="progress percent70"><span>70%</span></div>
            <strong>Redis</strong>
          </li>
          <li>
            <div class="progress percent70"><span>70%</span></div>
            <strong>Kafka</strong>
          </li>
          <li>
            <div class="progress percent85"><span>85%</span></div>
            <strong>Django</strong>
          </li>
          <li>
            <div class="progress percent85"><span>85%</span></div>
            <strong>FastAPI</strong>
          </li>
          <li>
            <div class="progress percent80"><span>80%</span></div>
            <strong>Nest</strong>
          </li>
        </ul>
        <!-- /skill-bars -->
      </div>
    </div>

    <div class="row button-section">
      <div class="col-twelve">
        <a href="#" title="Download CV" class="button button-primary"
          >Download CV</a
        >
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
    summary: {
      type: String,
      default: "",
    },
  },
}
</script>