import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import Vacancies from './pages/Vacancies.vue';
import {createRouter, createWebHistory} from 'vue-router';



const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/vacancies',
        component: Vacancies
    },

]

const router= createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app')
