/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";

// import WhoIam from "@/components/complements/HowIam.vue";
// import Main from "@/components/HelloWorld.vue";
// import Education from "@/components/complements/Education.vue";
// import Experience from '@/components/complements/Experience.vue';

// const routes = [{
//         path: "*",
//         redirect: "/",
//     },
//     {
//         path: "/whoiam",
//         name: "whoiam",
//         component: WhoIam,
//     },
//     {
//         path: "/",
//         name: "main",
//         component: Main,
//     },
//     {
//         path: "/education",
//         name: "education",
//         component: Education,
//     },
//     {
//         path: "/experience",
//         name: "experience",
//         component: Experience,
//     },
// ];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL)
}, );


router.beforeEach((to, prev, next) => {
    console.log(to);
    next();
});



export default router;