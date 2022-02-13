<template>
  <section v-show="enabled" id="contact">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Contato</h5>
        <h1>Eu adoraria conversar com você.</h1>
      </div>
    </div>
    <!-- /section-intro -->

    <div v-show="enableContactForm" class="row contact-form">
      <div class="col-twelve">
        <!-- form -->
        <form name="contactForm" id="contactForm" method="post" action="">
          <fieldset>
            <div class="form-field">
              <input
                name="contactName"
                type="text"
                id="contactName"
                placeholder="Name"
                value=""
                minlength="2"
                required=""
              />
            </div>
            <div class="form-field">
              <input
                name="contactEmail"
                type="email"
                id="contactEmail"
                placeholder="Email"
                value=""
                required=""
              />
            </div>
            <div class="form-field">
              <input
                name="contactSubject"
                type="text"
                id="contactSubject"
                placeholder="Subject"
                value=""
              />
            </div>
            <div class="form-field">
              <textarea
                name="contactMessage"
                id="contactMessage"
                placeholder="message"
                rows="10"
                cols="50"
                required=""
              ></textarea>
            </div>
            <div class="form-field">
              <button class="submitform">Submit</button>
              <div id="submit-loader">
                <div class="text-loader">Sending...</div>
                <div class="s-loader">
                  <div class="bounce1"></div>
                  <div class="bounce2"></div>
                  <div class="bounce3"></div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
        <!-- Form End -->

        <!-- contact-warning -->
        <div id="message-warning"></div>
        <!-- contact-success -->
        <div id="message-success">
          <i class="fa fa-check"></i>Your message was sent, thank you!<br />
        </div>
      </div>
      <!-- /col-twelve -->
    </div>
    <!-- /contact-form -->

    <div class="row contact-info">
      <div class="col-four tab-full">
        <div class="icon">
          <i class="icon-pin"></i>
        </div>

        <h5>Onde eu estou</h5>

        <p>
          Itapoá, Santa Catarina<br />
          Brasil<br />
        </p>
      </div>

      <div class="col-four tab-full collapse">
        <div class="icon">
          <i class="icon-mail"></i>
        </div>

        <h5>Email</h5>

        <p>
          oscarkaka222@gmail.com<br />
        </p>
      </div>

      <div class="col-four tab-full">
        <div class="icon">
          <i class="icon-phone"></i>
        </div>

        <h5>Telefone</h5>

        <p>
          Phone: (+41) 9 8874-3841<br />
          Whatsapp: (+41) 9 8874-3841<br />
        </p>
      </div>
    </div>
    <!-- /contact-info -->
  </section>
</template>
<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: true
    },
    enableContactForm: {
      type: Boolean,
      default: true
    }
  }
}
</script>