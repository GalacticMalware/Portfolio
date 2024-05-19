<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto">
      <v-timeline align="start" :side="$vuetify.display.xs ? 'end' : undefined">
        <v-timeline-item size="large" dot-color="lime-accent-2">
          <template v-slot:icon>
            <v-icon icon="mdi-dev-to" size="large"></v-icon>
            <!-- <v-avatar
              image="https://axistudios.mx/images/AXi-Studios-Logo-White-Rounded.png"
            ></v-avatar> -->
          </template>
          <template v-slot:opposite>
            <span
              class="pt-1 headline font-weight-bold text-lime-accent-2"
              v-if="!$vuetify.display.xs"
              >Experice: 2022 - Now</span
            >
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-body-1">
              <div class="text-wrap">
                <v-avatar image="@/assets/crediclub.jpg" start> </v-avatar>
                Crediclub
              </div>
            </v-card-title>
            <v-card-subtitle
              ><br />Senior Developer
              <div v-if="$vuetify.display.xs">
                Experice: 2022 - Now
              </div></v-card-subtitle
            >
            <v-card-text
              >Back-end developer. <br />Optimal implementation of SQL scripts.
              <br />Code review.<br />Deployment of development environments.<br />
              Approval and deployment in different environments.<br />
              DevOps (CI/CD)
              <br /><br />
              <!-- <v-avatar image="@/assets/icons/c--4.svg" size="25" start /> -->
              <v-row class="wrapper">
                <v-col
                  cols="2"
                  xs="4"
                  sm="4"
                  md="2"
                  lg="1"
                  xl="1"
                  v-for="(item, i) in credi"
                  :key="i"
                >
                  <v-img :width="25" :src="item.src" />
                </v-col>
                <v-col cols="2" xs="4" sm="4" md="2" lg="1" xl="1"></v-col>
                <v-col cols="2" xs="4" sm="4" md="2" lg="1" xl="1"></v-col>
                <v-col cols="2" xs="4" sm="4" md="2" lg="1" xl="1"></v-col>
                <v-col cols="2" xs="4" sm="4" md="2" lg="1" xl="1"></v-col>
              </v-row>
            </v-card-text>
            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-timeline-item>

        <v-timeline-item size="large" dot-color="teal">
          <template v-slot:icon>
            <v-icon icon="mdi-code-json" size="large"></v-icon>
            <!-- <v-avatar
              image="https://axistudios.mx/images/AXi-Studios-Logo-White-Rounded.png"
            ></v-avatar> -->
          </template>
          <template v-slot:opposite>
            <span
              class="pt-1 headline font-weight-bold text-teal"
              v-if="!$vuetify.display.xs"
              >Experice: 2020 - 2022</span
            >
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-body-1">
              <div class="text-wrap">
                <v-avatar image="@/assets/axi.jpeg" start> </v-avatar>
                Axi Studios
              </div>
            </v-card-title>
            <v-card-subtitle
              ><br />Full Satck Developer
              <div v-if="$vuetify.display.xs">
                Experice: 2020 - 2022
              </div></v-card-subtitle
            >
            <v-card-text
              >Back-end and Front-End developer. <br />
              Compilation of requirements.<br />
              Database architecture. <br />
              Hybrid and native application development. <br />
              Server configuration and implementation. <br />
              Maintenance of existing systems.<br />
              Testing of all projects. <br />
              <br />
              <v-row class="wrapper">
                <v-col
                  cols="2"
                  xs="4"
                  sm="4"
                  md="2"
                  lg="1"
                  xl="1"
                  v-for="(item, i) in axi"
                  :key="i"
                >
                  <v-img :width="25" :src="item.src" />
                </v-col>
              </v-row>
            </v-card-text>
            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-timeline-item>

        <v-timeline-item size="large" icon="mdi-xml" dot-color="blue-darken-4">
          <template v-slot:icon>
            <v-icon icon="mdi-xml" size="large" styart></v-icon>
            <!-- <v-avatar>
                <v-img
                  alt="John"
                  src="https://www.tuxtla.tecnm.mx/wp-content/uploads/2019/04/4a5zKQe0-1.jpg"
                ></v-img>
              </v-avatar> -->
            <!-- 
             <v-avatar  image="https://104.254.244.123/img/tec.svg"></v-avatar>  -->
          </template>
          <template v-slot:opposite v-if="!$vuetify.display.xs">
            <span class="pt-1 headline font-weight-bold text-lighth"
              >Experience: 2019 - 2020</span
            >
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-body-1">
              <div class="text-wrap">
                <v-avatar image="@/assets/icons/tec.jpg"> </v-avatar>
                Instututo Tecnologico Nacional de Mexico
              </div>

              <v-overlay
                opacity=".12"
                scrim="primary"
                contained
                model-value
                persistent
              />
            </v-card-title>
            <v-card-subtitle
              ><br />Junior Developer
              <div v-if="$vuetify.display.xs">
                Experience: 2019 - 2020
              </div></v-card-subtitle
            >
            <v-card-text>
              Planning and development (back-end and front-end).<br />
              Database architecture<br />
              Maintenance of existing systems.<br />
              Testing of all projects.<br />
              Server configuration and deployment of projects.
              <br /><br />
              <v-row class="wrapper">
                <v-col
                  cols="2"
                  xs="4"
                  sm="4"
                  md="2"
                  lg="1"
                  xl="1"
                  v-for="(item, i) in tec"
                  :key="i"
                >
                  <v-img :width="25" :src="item.src" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      credi: [
        {
          src: "assets/icons/c--4.svg",
        },
        {
          src: "assets/icons/nodojs.png",
        },
        {
          src: "assets/icons/js.png",
        },
        {
          src: "assets/icons/sql-server.webp",
        },
        {
          src: "assets/icons/mysql.png",
        },
        {
          src: "assets/icons/azure-2.svg",
        },
        {
          src: "assets/icons/pipe.png",
        },
        {
          src: "assets/icons/azure_repos.png",
        },
        {
          src: "assets/icons/devops-2.webp",
        },
      ],
      axi: [
        {
          src: "assets/icons/html.png",
        },
        {
          src: "assets/icons/css.png",
        },
        {
          src: "assets/icons/angular.webp",
        },
        {
          src: "assets/icons/nodojs.png",
        },
        {
          src: "assets/icons/js.png",
        },
        {
          src: "assets/icons/Typescript_logo_2020.svg",
        },
        {
          src: "assets/icons/php.png",
        },
        {
          src: "assets/icons/70142.png",
        },
        {
          src: "assets/icons/bootstrap.png",
        },
        {
          src: "assets/icons/mysql.png",
        },
        {
          src: "assets/icons/firebase.png",
        },
        {
          src: "assets/icons/ionic.png",
        },
        {
          src: "assets/icons/androide.png",
        },
        {
          src: "assets/icons/NGINX-product-icon.svg",
        },
        {
          src: "assets/icons/github.png",
        },
      ],
      tec: [
        {
          src: "assets/icons/html.png",
        },
        {
          src: "assets/icons/css.png",
        },
        {
          src: "assets/icons/vue.png",
        },
        {
          src: "assets/icons/laravel.png",
        },
        {
          src: "assets/icons/js.png",
        },
        {
          src: "assets/icons/php.png",
        },
        {
          src: "assets/icons/vuetify.png",
        },
        {
          src: "assets/icons/bootstrap.png",
        },
        {
          src: "assets/icons/mysql.png",
        },
        {
          src: "assets/icons/NGINX-product-icon.svg",
        },
        {
          src: "assets/icons/github.png",
        },
        {
          src: "assets/icons/PWA.svg",
        },
      ],
    };
  },
};
</script>
