<template>
  <v-app>
    <div v-if="!$vuetify.display.xs">
      <Nav />
    </div>

    <div v-if="$vuetify.display.xs">
      <NavApp />
    </div>
    <div>
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
