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
              <v-carousel-item
                v-for="(item, i) in back_end"
                :key="i"
                :src="item.src"
                show-arrows="hover"
                cycle
              ></v-carousel-item>
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
                v-for="(item, i) in front_end"
                :key="i"
                :src="item.src"
                show-arrows="hover"
                cycle
              ></v-carousel-item>
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
                v-for="(item, i) in sys"
                :key="i"
                :src="item.src"
                show-arrows="hover"
                cycle
              ></v-carousel-item>
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
                v-for="(item, i) in hack"
                :key="i"
                :src="item.src"
                show-arrows="hover"
                cycle
              ></v-carousel-item>
            </v-carousel>
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
      back_end: [
        {
          src: "assets/education/AspNet.jpg",
        },
        {
          src: "assets/education/DesarrolloSeguro.jpg",
        },
        {
          src: "assets/education/OWASP.jpg",
        },
        {
          src: "assets/education/JSGUIA.jpg",
        },
      ],
      front_end: [
        {
          src: "assets/education/udemy_Angular.jpg",
        },
        {
          src: "assets/education/certificadoUdemy_php.png",
        },
        {
          src: "assets/education/certificado9.png",
        },
        {
          src: "assets/education/certificado8.png",
        },
        {
          src: "assets/education/udemy_Angular.jpg",
        },
        {
          src: "assets/education/certificadoGoogle.png",
        },
      ],
      sys: [
        {
          src: "assets/education/certificado5.jpeg",
        },
        {
          src: "assets/education/certificado4.jpeg",
        },
        {
          src: "assets/education/certificado3.png",
        },
        {
          src: "assets/education/certificado2.png",
        },
        {
          src: "assets/education/certificado1.png",
        },
      ],
      hack: [
        {
          src: "assets/education/certificado14.png",
        },
        {
          src: "assets/education/SecurityProd.jpg",
        },
        {
          src: "assets/education/certificado10.png",
        },
        {
          src: "assets/education/certificado11.png",
        },
        {
          src: "assets/education/certificado12.png",
        },
        {
          src: "assets/education/certificado13.png",
        },
      ],
    };
  },
};
</script>
