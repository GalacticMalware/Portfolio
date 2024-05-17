<template>
    <v-app-bar theme="dark" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
  
      <v-toolbar-title></v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
  
        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>
    </v-app-bar>
  
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'left' : undefined"
      permanent
    >
      <v-list >
          <v-list-item
          prepend-icon="mdi-badge-account"
          title="How i am"
          value="home"
          @click.stop="drawer = !drawer"
          :to="{ path: '/' }"
        ></v-list-item></v-list>
        <v-list-item
          prepend-icon="mdi-console"
          title="Experiencia"
          value="experience"
          @click.stop="drawer = !drawer"
          :to="{ path: '/experience' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-dev-to"
          title="Portafolio"
          value="projects"
          @click.stop="drawer = !drawer"
          :to="{ path: '/projects' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-school"
          title="Educacion"
          value="education"
          @click.stop="drawer = !drawer"
          :to="{ path: '/education' }"
        ></v-list-item>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  
    watch: {
      group() {
        this.drawer = false;
      },
    },
  };
  </script>
  