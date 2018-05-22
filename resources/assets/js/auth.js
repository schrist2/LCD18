
import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueAuth from '@websanova/vue-auth';
import auth from '@websanova/vue-auth/drivers/auth/bearer';
import http from '@websanova/vue-auth/drivers/http/axios.1.x';
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = '/api/';

Vue.use(VueAuth, {
    auth,
    http,
    router
});

/*
Vue.axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            Vue.auth.logout({ redirect: { name: 'auth.login' } });
            return;
        }

        return Promise.reject(error);
    });
*/

/*
next(function (res) {
        if (res.)

        // Unauthorized Access

        if (
            res.status === 401 &&
            ['UnauthorizedAccess', 'InvalidToken'].indexOf(res.data.code) > -1
        ) {
            Vue.auth.logout({
                redirect: {name: 'auth-login'}
            });
        }

        // System Error

        else if (res.status === 500) {
            Vue.router.push({name: 'error-500'});
        }
    });
}
 */