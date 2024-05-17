<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto">
      <div class="py-4" />
      <v-card class="py-4" color="surface-variant" rounded="lg" variant="tonal">
        <div class="text-center">
          <h1 class="text-h4 font-weight-bold">
            <v-icon icon="mdi-school"></v-icon> University school
          </h1>

          <h1 class="text-h6 font-weight-bold">
            Instituto Tecnológico Nacional de México campus Tuxtla Gutiérrez
            Chiapas.
          </h1>
        </div>
        <br />
        <v-img
          class="mb-4"
          height="250"
          src="@/assets/education/perfil2.jpeg"
        />
      </v-card>

      <div class="py-4" />
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6"
          ><v-card
            title="Back-end Development"
            prepend-icon="mdi-school"
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="tonal"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                Courses provided Udemy
              </div>
              <v-kbd>{{ `Mode: Online` }}</v-kbd>
            </template>
            <v-carousel show-arrows="hover" cycle height="400" hide-delimiters>
              
              <!-- <v-carousel-item
                src="@/assets/projects/Nextcloud-Hub-Logo-1920.jpg"
                show-arrows="hover"
                cycle
              ></v-carousel-item> -->
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6"
          ><v-card
            title="Front-end Development"
            prepend-icon="mdi-school"
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="tonal"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                Courses provided by Platzi and Udemy
              </div>
              <v-kbd>{{ `Mode: Online` }}</v-kbd>
            </template>

            <v-carousel show-arrows="hover" cycle height="400" hide-delimiters>
              <v-carousel-item
                src="@/assets/education/certificadoUdemy_php.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado9.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado8.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/udemy_Angular.jpg"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificadoGoogle.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
            </v-carousel>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6"
          ><v-card
            title="System Admin"
            prepend-icon="mdi-school"
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="tonal"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                Courses provided by Platzi and Cisco Network Academy
              </div>
              <v-kbd>{{ `Mode: Online and Classroom` }}</v-kbd>
            </template>
            <v-carousel show-arrows="hover" cycle height="400" hide-delimiters>
              <v-carousel-item
                src="@/assets/education/certificado5.jpeg"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado4.jpeg"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado3.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado2.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado1.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
            </v-carousel>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6"
          ><v-card
            title="Ethical hacking"
            prepend-icon="mdi-school"
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="tonal"
          >
            <template #subtitle>
              <div class="text-subtitle-1 text-wrap">
                Courses provided by Platzi and Cisco Network Academy
              </div>
              <v-kbd>{{ `Mode: Online` }}</v-kbd>
            </template>
            <v-carousel show-arrows="hover" cycle height="400" hide-delimiters>
              <v-carousel-item
                src="@/assets/education/certificado14.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado10.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado11.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado12.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
              <v-carousel-item
                src="@/assets/education/certificado13.png"
                show-arrows="hover"
                cycle
                hide-delimiter-background
              />
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>

    <!-- <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="bg-grey-lighten-2"
        cover
      >
        <template v-slot:placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
