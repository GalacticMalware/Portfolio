/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
//import { routes } from 'vue-router/auto-routes'
//import { routes } from 'vue-router/auto-routes'
import axios from 'axios'
import VueAxios from 'vue-axios'

export function registerPlugins(app) {
    app
        .use(vuetify)
        .use(router)
        .use(VueAxios, axios)
}