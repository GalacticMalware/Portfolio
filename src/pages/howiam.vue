<template>
    <v-container class="fill-height">
      <v-responsive class="align-centerfill-height mx-auto" max-width="900">
        <!-- <v-img class="mb-4" height="250" src="@/assets/undraw_Developer.png" /> -->
  
        <div class="text-center">
          <!-- <spam class="typing_s">Hola mundo</spam> -->
  
          <h1 class="text">
            Hola soy Daniel Alejandro <br />Morales Gomez
          </h1>
  
          <!-- <div class="text-subtitle-1">Ingeniero Sistemas Computacionales</div> -->
  
          <div class="wrapper">
            <di class="static-txt">I'm a</di>
            <ul class="dynamic-txts">
              <li><span>Full Stack </span></li>
              <li><span>Back End</span></li>
              <li><span>Admin System</span></li>
            </ul>
          </div>
        </div>
  
        <div class="py-4" />
  
        <v-row>
          <v-col cols="12">
            <v-card
              class="py-4"
              color="surface-variant"
              image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
              prepend-icon="mdi-rocket-launch-outline"
              rounded="lg"
              variant="outlined"
            >
              <template #image>
                <v-img position="top right" />
              </template>
  
              <template #title>
                <h2 class="text-h5 font-weight-bold">Get started</h2>
              </template>
  
              <template #subtitle>
                <div class="text-subtitle-1">
                  Replace this page by removing
                  <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in
                  <v-kbd>pages/index.vue</v-kbd>.
                </div>
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
  
          <v-col cols="6">
            <v-card
              append-icon="mdi-open-in-new"
              class="py-4"
              color="surface-variant"
              href="https://vuetifyjs.com/"
              prepend-icon="mdi-text-box-outline"
              rel="noopener noreferrer"
              rounded="lg"
              subtitle="Learn about all things Vuetify in our documentation."
              target="_blank"
              title="Documentation"
              variant="text"
            >
              <v-overlay
                opacity=".06"
                scrim="primary"
                contained
                model-value
                persistent
              />
            </v-card>
          </v-col>
  
          <v-col cols="6">
            <v-card
              append-icon="mdi-open-in-new"
              class="py-4"
              color="surface-variant"
              href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
              prepend-icon="mdi-star-circle-outline"
              rel="noopener noreferrer"
              rounded="lg"
              subtitle="Explore available framework Features."
              target="_blank"
              title="Features"
              variant="text"
            >
              <v-overlay
                opacity=".06"
                scrim="primary"
                contained
                model-value
                persistent
              />
            </v-card>
          </v-col>
  
          <v-col cols="6">
            <v-card
              append-icon="mdi-open-in-new"
              class="py-4"
              color="surface-variant"
              href="https://vuetifyjs.com/components/all"
              prepend-icon="mdi-widgets-outline"
              rel="noopener noreferrer"
              rounded="lg"
              subtitle="Discover components in the API Explorer."
              target="_blank"
              title="Components"
              variant="text"
            >
              <v-overlay
                opacity=".06"
                scrim="primary"
                contained
                model-value
                persistent
              />
            </v-card>
          </v-col>
  
          <v-col cols="6">
            <v-card
              append-icon="mdi-open-in-new"
              class="py-4"
              color="surface-variant"
              href="https://discord.vuetifyjs.com"
              prepend-icon="mdi-account-group-outline"
              rel="noopener noreferrer"
              rounded="lg"
              subtitle="Connect with Vuetify developers."
              target="_blank"
              title="Community"
              variant="text"
            >
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
  
    <v-bottom-sheet>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="Click Me"></v-btn>
      </template>
  
      <v-card
        title="Bottom Sheet"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
      ></v-card>
    </v-bottom-sheet>
  </template>
  
  <script setup></script>
  