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
        <form>
          <fieldset>
            <div class="form-field">
              <input
                v-model="form.name"
                name="contactName"
                type="text"
                placeholder="Seu nome"
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
              <v-btn
                class="submitform btn-send-form"
                type="button"
                :loading="loading"
                @click="sendMail()"
              >
                Enviar E-mail
              </v-btn>
            </div>
          </fieldset>
        </form>
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
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent min-width="320" max-width="420">
        <v-card>
          <v-card-title class="text-h4">
            {{ dialogTitle }}
          </v-card-title>
          <v-card-text class="text-h6">{{ dialogText }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success darken-3" style="font-size: 12px" large width="100%" @click="dialog = false">
              Beleza!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
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
    loading: false,
    dialog: false,
    dialogText: "",
    dialogTitle: "",
    form: {
      name: '',
      email: '',
      message: '',
    },
  }),

  methods: {
    openDialog(title, text) {
      this.dialog = true
      this.dialogTitle = title
      this.dialogText = text
    },
    async sendMail() {
      this.loading = true
      this.$axios.setHeader('Access-Control-Allow-Origin', '*')
      if (this.form.name === '' || this.form.email === '' || this.form.message === '') {
        this.openDialog('Ops!', 'Por favor, preencha todos os campos.')
        this.loading = false
        return
      }
      try {
        await this.$axios.$post(process.env.contactsURL, this.form)
        this.openDialog('Mensagem enviada com sucesso!', 'Mensagem enviada com sucesso. Logo vou entrar em contato com você. Um abraço!')
      } catch(e) {
        this.openDialog('Erro ao enviar mensagem!', 'Não foi possível enviar e-mail! Mas calma, pode entrar em contato comigo pelo telefone ou whatsapp!')
      }
      this.loading = false
    },
  },
}
</script>
<style scoped>
.btn-send-form {
  font-family: 'poppins-regular', sans-serif !important;
  font-weight: 600;
  margin-bottom: 100px;
}

.title-contact {
  font-family: 'poppins-regular', sans-serif !important;
  font-weight: 600;
  font-size: 1.5rem;
}
</style>