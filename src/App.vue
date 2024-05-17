<template>
  <v-app>
    <div v-if="!$vuetify.display.xs">
      <Nav />
      <v-main>
        <router-view />
      </v-main>
    </div>

    <div v-if="$vuetify.display.xs">
      <NavApp />
      <v-main>
        <router-view />
      </v-main>
      
    </div>
    <Contact />

  </v-app>
</template>

<script setup>
//
</script>
