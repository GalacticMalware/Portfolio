<template>
  <v-btn
    icon="mdi-message-fast-outline"
    size="x-large"
    variant="flat"
    class="float"
    color="rgb(164,91,102)"
    @click="modalContact = true"
  >
    <v-icon icon="mdi-message-fast-outline"></v-icon>

    <!-- <v-btn
        class="pe-2 float"
        prepend-icon="mdi-account-multiple-outline"
        variant="flat"
      > -->

    <v-dialog activator="parent" max-width="500" v-model="dialog">
      <v-card rounded="lg">
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">
            <v-icon icon="mdi-contacts"></v-icon> Contacts
          </div>

          <v-btn
            icon="mdi-close"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-card-title>

        <v-divider class="mb-4"></v-divider>

        <v-card-text>
          <div class="text-medium-emphasis mb-4">
            Contact me by the following means.
            <br />
            <div class="text-center">
              <v-btn
                class="mx-4"
                icon="mdi-linkedin"
                color="blue"
                size="large"
                target="_blank"
                href="https://www.linkedin.com/in/daniel-alejandro-morales-gomez-11aab4191"
              ></v-btn>
              <v-btn
                class="my-4"
                icon="mdi-github"
                color="white"
                size="large"
                target="_blank"
                href="https://github.com/GalacticMalware"
              ></v-btn>
              <v-btn
                class="mx-4"
                icon="mdi-email"
                color="rgb(252,109,109)"
                size="large"
                href="mailto: daniel_mg_97@hotmail.com"
              ></v-btn>
            </div>
          </div>

          <div class="mb-2">Message (optional)</div>

          <v-textarea
            :counter="300"
            class="mb-2"
            rows="2"
            variant="outlined"
            persistent-counter
            v-model="message"
          ></v-textarea>

          <!-- <div class="text-overline mb-2">💎 PREMIUM</div>

                <div class="text-medium-emphasis mb-1">
                  Share with unlimited people and get more insights about your network. Try Premium Free for 30 days.
                </div>

                <v-btn
                  class="text-none font-weight-bold ms-n4"
                  color="primary"
                  text="Retry Premium Free"
                  variant="text"
                ></v-btn> -->
        </v-card-text>

        <v-divider class="mt-2"></v-divider>

        <v-card-actions class="my-2 d-flex justify-end">
          <v-btn
            class="text-none"
            rounded="xl"
            text="Cancel"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            class="text-none"
            color="primary"
            rounded="xl"
            text="Send"
            variant="flat"
            @click="send()"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      :color="status"
      location="top right"
    >
      <v-alert
        icon="mdi-close-circle"
        :title="title"
        :text="response"
        :color="status"
      ></v-alert>
    </v-snackbar>
  </v-btn>
</template>

<script>
import { sendMessage } from "@/services/sendMessage";
export default {
  data() {
    return {
      message: "",
      dialog: false,
      snackbar: false,
      status: "",
      response: "",
      title: "",
    };
  },
  methods: {
    async send() {
      try {
        await sendMessage(this.message);
        this.status = "success";
        (this.title = "Success"),
          (this.response = "The message has been sent successfully");
        this.snackbar = true;
        this.dialog = false;
        this.message = '';
      } catch (e) {
        this.status = "rgb(207,102,121)";
        this.title = "!Opps";
        this.response = "An error occurred, please try again.";
        this.snackbar = true;
      }
    },
  },
};
</script>
