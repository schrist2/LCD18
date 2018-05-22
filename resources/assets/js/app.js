
// Bootstrapping...
import './bootstrap'

// Vue and Vue plugins
import Vue from 'vue';
import store from './store';
import router from './router';
import i18n from './i18n';
import './auth';

// Components
import app from './components/app';

//
Vue.component(app.name, app);

Vue.config.debug = true;

// Create Vue instance
window.Vue = new Vue({
    el: '#app',
    store,
    router,
    i18n
});
