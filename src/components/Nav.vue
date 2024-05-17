<template>

 <!-- <v-app-bar class="px-3 d-flex d-sm-none" style="z-index: 99999;" density="compact" flat >
      <v-spacer></v-spacer>

      <v-tabs color="grey-darken-2" centered>
        <v-tab key="How i am" text="How i am"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

     
    </v-app-bar> -->
    
  <!-- <template class="d-flex d-sm-none">
    <v-app-bar prominentprominent >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-app-bar-title>Options</v-app-bar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
  </template> -->

  <!-- <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
    dark
    app
  >
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-email"
        title="Inbox"
        value="inbox"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Supervisors"
        value="supervisors"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer> -->
  <!-- class="d-none d-sm-flex" -->


  <v-navigation-drawer theme="dark"  permanent   v-model="drawer" class="d-none d-sm-flex"
  
    >
    <v-list>
      <div class="text-center">
        {{  }}
        <v-avatar
        class=""
          image="@/assets/perfil1.png"
          size="150"
        ></v-avatar>
        
        <v-list-item subtitle="" title="Software developer">
          <template v-slot:append>
        
      </template>
        </v-list-item>
      </div>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-badge-account"
        title="How i am"
        value="home"
        :to="{ path: '/' }"
      ></v-list-item>
      <!-- <v-list-item
        prepend-icon="mdi-badge-account"
        title="¿Quien soy?"
        value="who_im"
        :to="{ path:'/whoiam'}"
      ></v-list-item> -->
      <v-list-item
        prepend-icon="mdi-console"
        title="Experiencia"
        value="experience"
        :to="{ path: '/experience' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-dev-to"
        title="Portafolio"
        value="projects"
        :to="{ path: '/projects' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-school"
        title="Educacion"
        value="education"
        :to="{ path: '/education' }"
      ></v-list-item>
    </v-list>

    <!-- <template v-slot:append>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </template> -->
  </v-navigation-drawer>
 
</template>

<script>
export default {
data () {
  return {
    drawer: true,
    rail: false,
  }
},
}
</script>
