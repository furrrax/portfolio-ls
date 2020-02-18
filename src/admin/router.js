import Vue from "vue";
import Vuerouter from "vue-router";

Vue.use(Vuerouter);

import about from './components/about/about.vue';
import works from './components/works/works.vue';
import comments from './components/comments/comments.vue';
import login from './components/login/login.vue';

const routes =[
    {
        path: '/',
        component: about
    },
    {
        path: '/works',
        component: works
    },
    {
        path: '/comments',
        component: comments
    },
    {
        path: '/login',
        component: login
    },
];

export default new Vuerouter({ routes });