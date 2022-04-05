<template>
  <section v-show="enabled" id="services">
    <div class="overlay"></div>

    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Serviços</h5>
        <h1>O que eu posso oferecer a você?</h1>
        <p class="lead">
          Eu atuo desde 2016 como desenvolvedor web, e desde então
          venho atuando com diversos sistemas e aplicações web. Desde sistemas 
          monoliticos até microserviços orientado a eventos.
        </p>
        <p class="lead">
          Já criei sistemas totalmente do zero, refatorei e melhorei sistemas.
          Então se você precisa de uma profissional capaz de desenvolver sistemas
          facilemente escaláveis do ponto de vista de performace ou de criação de novas
          funcionalidades, pode contar comigo. 
        </p>
      </div>
    </div>
    <!-- /section-intro -->

    <div class="row services-content">
      <div id="owl-slider" class="owl-carousel services-list">
        <div class="service">
          <span class="icon"><i class="icon-earth"></i></span>

          <div class="service-content">
            <h3>Webdesign</h3>

            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <!-- /service -->

        <div class="service">
          <span class="icon"><i class="icon-window"></i></span>

          <div class="service-content">
            <h3>Web Development</h3>

            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <!-- /service -->

        <div class="service">
          <span class="icon"><i class="icon-paint-brush"></i></span>

          <div class="service-content">
            <h3>Branding</h3>

            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <!-- /service -->

        <div class="service">
          <span class="icon"><i class="icon-toggles"></i></span>

          <div class="service-content">
            <h3>UI/UX Design</h3>

            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <!-- /service -->

        <div class="service">
          <span class="icon"><i class="icon-image"></i></span>

          <div class="service-content">
            <h3>Graphics Design</h3>

            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <!-- /service -->

        <div class="service">
          <span class="icon"><i class="icon-chat"></i></span>

          <div class="service-content">
            <h3>Consultancy</h3>

            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
        <!-- /service -->
      </div>
      <!-- /services-list -->
    </div>
    <!-- /services-content -->
  </section>
</template>
<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: true
    }
  }
}
</script>