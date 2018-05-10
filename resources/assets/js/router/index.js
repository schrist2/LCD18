
import Vue from 'vue';
import VueRouter from 'vue-router';

import pageIndex from '../views/index';
import pageAuthLogin from '../views/auth/login';
import pageAuthRegister from '../views/auth/register';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        { path: '/', name: 'index', component: pageIndex },
        { path: '/login', name: 'auth.login', component: pageAuthLogin },
        { path: '/register', name: 'auth.register', component: pageAuthRegister }
    ]
});

export default router;
