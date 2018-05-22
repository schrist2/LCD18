
import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

import viewIndex from '../views/index';
import viewAuthLogin from '../views/auth/login';
import viewUserHome from '../views/user/home';
import viewUserSettings from '../views/user/settings';
import viewPatientIndex from '../views/patient/index';
import viewPatientShow from '../views/patient/show';

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
        { path: '/', name: 'index', component: viewIndex },

        { path: '/login', name: 'auth.login', component: viewAuthLogin, meta: { auth: false } },

        { path: '/home', name: 'user.home', component: viewUserHome, meta: { auth: true } },
        { path: '/settings', name: 'user.settings', component: viewUserSettings, meta: { auth: true } },

        { path: '/patients', name: 'patient.index', component: viewPatientIndex, meta: { auth: true } },
        { path: '/patient/:id', name: 'patient.show', component: viewPatientShow, meta: { auth: true } },
    ]
});

router.afterEach(() => {
    store.commit('clearAlert');
});

Vue.router = router;

export default router;
