/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

//router

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

// import axios from 'axios'
// app.config.globalProperties.axios = axios

app.mount('#app')