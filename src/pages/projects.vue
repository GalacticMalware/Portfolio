<template>
  <v-container class="fill-height px-12 py-12" fluid>
    <v-responsive class="align-centerfill-height mx-auto">
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="12"
          md="4"
          lg="4"
          xl="4"
          v-for="(item, i) in projects"
          :key="i"
        >
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              :src="item.img"
              cover
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4">
              {{ item.subtitle }}
            </v-card-subtitle>
            <v-card-text>
              <div v-for="(t, i) in item.text" :key="i">
                {{ t.t }}
              </div>
            </v-card-text>
            <v-card-actions class="wrap">
              <v-btn
                class="ma-2"
                color="red-lighten-2"
                :icon="btn.icon"
                variant="tonal"
                v-for="(btn, j) in item.btn"
                :key="j"
                :href="btn.url"
                :target="btn.target"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        title: "NextCloud",
        subtitle: "CloudStorage",
        text: [
          {
            t: "Storage of different types of files.",
          },
          {
            t: "Includes an API for uploading and sharing files.",
          },
          {
            t: "If you need a trial account, please contact me.",
          },
        ],
        img: "src/assets/projects/Nextcloud-Hub-Logo-1920.jpg",
        btn: [
          {
            url: "",
            icon: "mdi-github",
            target: "",
          },
          {
            url: "",
            icon: "mdi-api",
            target: "",
          },
          {
            url: "http://104.254.244.123:8080/",
            icon: "mdi-web",
            target: "_blank",
          },
        ],
      },
      {
        title: "FODAP",
        subtitle: "Instituto Tecnologico Naciona de Mexico",
        text: [
          {
            t: "Teacher training and professional development system.",
          }
        ],
        img: "src/assets/projects/tecnolgico_nacional_de_mxico_cover.jpeg",
        btn: [
          {
            url: "https://fodap.ittg.edu.mx/",
            icon: "mdi-web",
            target: "_blank",
          },
        ],
      },
    ],
  }),
};
</script>
