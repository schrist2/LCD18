
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import patients from './modules/patients';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        alert: {}
    },
    mutations: {
        setAlert (state, payload) {
            state.alert = payload;
        },

        clearAlert(state) {
            state.alert = {};
        }
    },
    getters: {
        hasAlert (state) {
            return state.alert.type != null;
        }
    },
    modules: {
        user,
        patients
    }
});
