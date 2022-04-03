<template>
  <section v-show="enabled" id="contact">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Contato</h5>
        <h1>Eu adoraria conversar com você.</h1>
      </div>
    </div>

    <!-- /section-intro -->
    <div class="row contact-form">
      <div class="col-twelve">
        <!-- form -->
        <div>
          <fieldset>
            <div class="form-field">
              <input
                v-model="form.name"
                name="contactName"
                type="text"
                placeholder="Name"
                value=""
                minlength="2"
                required=""
              />
            </div>
            <div class="form-field">
              <input
                v-model="form.email"
                name="contactEmail"
                type="email"
                placeholder="Email"
                value=""
                required=""
              />
            </div>
            <div class="form-field">
              <textarea
                v-model="form.message"
                name="contactMessage"
                placeholder="Mensagem"
                rows="10"
                cols="50"
                required=""
              ></textarea>
            </div>
            <div class="form-field">
              <button class="submitform" type="buttom" @click="sendMail()">
                Enviar E-mail
              </button>
            </div>
          </fieldset>
        </div>
        <div id="message-warning"></div>
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

        <p>oscarkaka222@gmail.com<br /></p>
      </div>

      <div class="col-four tab-full">
        <div class="icon">
          <i class="icon-phone"></i>
        </div>

        <h5>Telefone</h5>

        <p>
          Número: +55 (41) 9 8874-3841<br />
          Whatsapp: +55 (41) 9 8874-3841<br />
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
      default: true,
    },
  },

  data: () => ({
    form: {
      name: '',
      email: '',
      message: '',
    },
  }),

  methods: {
    async sendMail() {
      await this.$axios.$post(process.env.contactsURL, this.form)
    },
  },
}
</script>