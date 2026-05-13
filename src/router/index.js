import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Dashboard from '../pages/Dashboard.vue';
import Upload from '../pages/Upload.vue';
import Profile from '../pages/Profile.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/upload', component: Upload },
    { path: '/profile', component: Profile }
];

export default createRouter({
    history: createWebHistory(),
    routes
});