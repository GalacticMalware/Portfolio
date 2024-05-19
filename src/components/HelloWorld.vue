<template>
  <div v-if="!$vuetify.display.xs">
    <br />
  </div>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto">
      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            :image="
              !$vuetify.display.xs
                ? 'https://cdn.vuetifyjs.com/docs/images/one/create/feature.png'
                : undefined
            "
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <div
                class="text-center"
                style="margin-bottom: 2%"
                v-if="$vuetify.display.xs"
              >
                <v-avatar
                  class=""
                  image="@/assets/perfil1.png"
                  size="150"
                ></v-avatar>
                <br />
                <br />
              </div>
              <h2
                :class="
                  !$vuetify.display.xs
                    ? 'text-h4 font-weight-bold text-center'
                    : 'text-body-1 font-weight-bold text-center text-wrap'
                "
              >
                Hi i'm Daniel Alejandro Morales Gomez
              </h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                <div class="wrapper" v-if="!$vuetify.display.xs">
                  <div class="static-txt">I'm a</div>
                  <ul class="dynamic-txts">
                    <li>
                      <span
                        >Full Stack
                        <v-icon
                          style="margin-top: -10px"
                          icon="mdi-dev-to"
                          size="default"
                          end
                        ></v-icon
                      ></span>
                    </li>
                    <li>
                      <span
                        >Software developer
                        <v-icon
                          style="margin-top: -10px"
                          icon="mdi-code-json"
                          size="45"
                          end
                        ></v-icon
                      ></span>
                    </li>
                    <li>
                      <span
                        >Admin System
                        <v-icon
                          style="margin-top: -10px"
                          icon="mdi-console"
                          size="45"
                          end
                        ></v-icon
                      ></span>
                    </li>
                  </ul>
                </div>

                <div class="wrapper" v-if="$vuetify.display.xs">
                  <div class="static-txt_m">I'm a</div>
                  <ul class="dynamic-txts_m">
                    <li>
                      <span
                        >Full Stack
                        <v-icon
                          style="margin-top: 0px"
                          icon="mdi-dev-to"
                          size="25"
                          end
                        ></v-icon
                      ></span>
                    </li>
                    <li>
                      <span
                        >Software developer
                        <v-icon
                          style="margin-top: 0px"
                          icon="mdi-code-json"
                          size="22"
                          end
                        ></v-icon
                      ></span>
                    </li>
                    <li>
                      <span
                        >Admin System
                        <v-icon
                          style="margin-top: 0px"
                          icon="mdi-console"
                          size="22"
                          end
                        ></v-icon
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
                <v-kbd>pages/index.vue</v-kbd>. -->
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col :cols="$vuetify.display.xs ? 12 : 6">
          <v-card
            title="Experience"
            class="py-4"
            color="surface-variant"
            append-icon="mdi-open-in-new"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="outlined"
            :to="{ path: '/experience' }"
          >
            <!-- <template #image>
              <v-img position="top right" />
            </template> -->

            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                I have
                <span style="color: #fc6d6d"><b>5 years of experience</b></span
                >, as a Full Stack (back-end and front-end) developer, server
                administrator and DevOps.
                <br />
                <!-- Now I specialize as a
                <span style="color: #fc6d6d"><b>DevOps</b></span>. -->
                <div v-if="!$vuetify.display.xs">
                  <br />
                  <br />
                </div>
              </div>
              <!-- <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
                <v-kbd>pages/index.vue</v-kbd>. -->
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col :cols="$vuetify.display.xs ? 12 : 6">
          <v-card
            title="Education"
            class="py-4"
            color="surface-variant"
            append-icon="mdi-open-in-new"
            prepend-icon="mdi-school"
            rounded="lg"
            variant="outlined"
            :to="{ path: '/education' }"
          >
            <!-- <template #image>
              <v-img position="top right" />
            </template> -->

            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                I studied college at the Tecnológico Nacional de México campus
                Tuxtla Gutiérrez, finishing and graduating as a
                <span style="color: #fc6d6d"
                  ><b>computer systems engineer</b></span
                >, in addition to classroom and online courses such as Cisco
                Networking Academy, Platzi, Google and Udemy.
              </div>
              <!-- <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
                <v-kbd>pages/index.vue</v-kbd>. -->
            </template>

            <v-overlay
              opacity=".12"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col :cols="!$vuetify.display.xs ? 6 : 12">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            title="Projects"
            variant="outlined"
            :to="{ path: '/projects' }"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                I have developed different
                <span style="color: #fc6d6d"><b>personal projects</b></span> as
                well as experiences in which I have had the opportunity to work
                with a great team of professionals.
              </div>
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col :cols="!$vuetify.display.xs ? 6 : 12">
          <v-card
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-map-marker"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle=""
            title="From"
            variant="outlined"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                Tuxtla Gutíerrez, Chiapas, México
                <div v-if="!$vuetify.display.xs">
                  <br />
                  <br />
                </div>
              </div>
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-code-braces"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle=""
            title="Skill's"
            variant="outlined"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                <br />
                <v-row class="wrapper">
                  <v-col
                    cols="2"
                    xs="4"
                    sm="4"
                    md="2"
                    lg="1"
                    xl="1"
                    v-for="(item, i) in skills"
                    :key="i"
                  >
                    <v-img :width="35" :src="item.src"></v-img>
                  </v-col>
                </v-row>
              </div>
            </template>
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          src: "assets/icons/vue.png",
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
          src: "assets/icons/c--4.svg",
        },
        {
          src: "assets/icons/bootstrap.png",
        },
        {
          src: "assets/icons/vuetify.png",
        },
        {
          src: "assets/icons/mysql.png",
        },
        {
          src: "assets/icons/sql-server.webp",
        },
        {
          src: "assets/icons/firebase.png",
        },
        {
          src: "assets/icons/ionic.png",
        },
        {
          src: "assets/icons/NGINX-product-icon.svg",
        },
        {
          src: "assets/icons/devops-2.webp",
        },
        {
          src: "assets/icons/git.png",
        },
      ],
    };
  },
};
</script>
