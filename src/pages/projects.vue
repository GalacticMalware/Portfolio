<template>
  <v-container class="fill-height px-12 py-12" fluid>
    <v-responsive class="align-centerfill-height mx-auto">
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="@/assets/projects/Nextcloud-Hub-Logo-1920.jpg"
              cover
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title>NextCloud</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> CloudStorage </v-card-subtitle>

            <v-card-text>
              <div>Storage of different types of files.</div>
              <div>Includes an API for uploading and sharing files.</div>
              <div>If you need a trial account, please contact me.</div>
            </v-card-text>

            <v-card-actions class="wrap">
              <v-btn
                class="ma-2"
                color="red-lighten-2"
                icon="mdi-github"
                variant="tonal"
                size="default"
                href=""
              ></v-btn>
              
              <v-btn
                class="ma-2"
                color="red-lighten-2"
                icon="mdi-api"
                variant="tonal"
              ></v-btn>

              <v-btn
                class="ma-2"
                color="red-lighten-2"
                icon="mdi-web"
                variant="tonal"
                href="http://104.254.244.123:8080/"
                target="_blank"
              ></v-btn>
              <!-- <v-btn
                class="ma-2"
                color="red-lighten-2"
                icon="mdi-account-arrow-right "
                variant="tonal"
                size="default"
                @click="dialog = true"
              ></v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              src="@/assets/projects/tecnolgico_nacional_de_mxico_cover.jpeg"
              cover
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title>FODAP</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4"> Instituto Tecnologico Naciona de Mexico </v-card-subtitle>
            
            <v-card-text>
              <div>Teacher training and professional development system</div>
            </v-card-text>

            <v-card-actions>
              <v-btn
                class="ma-2"
                color="red-lighten-2"
                icon="mdi-web"
                variant="tonal"
                href="https://fodap.ittg.edu.mx/"
                target="_blank"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>

  <v-dialog v-model="dialog" max-width="800">
    <v-card prepend-icon="mdi-message-text-fast" title="Contact">
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="6" sm="12">
            <v-text-field label="First name*" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="12">
            <v-text-field label="Middle name"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="12">
            <v-text-field
              label="Last name*"
              persistent-hint
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <v-text-field label="Email*" required></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <v-text-field label="Phone number*" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="['New Account Cloud Storage', 'Contact']"
              label="Interests"
              auto-select-first
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>

        <small class="text-caption text-medium-emphasis"
          >*indicates required field</small
        >
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

        <v-btn
          color="primary"
          text="Save"
          variant="tonal"
          @click="dialog = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
