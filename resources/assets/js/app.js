
// Bootstrapping...
import './bootstrap'

// Vue and Vue plugins
import Vue from 'vue';
import router from './router';
import i18n from './i18n';

// Components
import app from './components/app';
import store from './store';

//
Vue.component(app.name, app);

Vue.config.debug = true;

// Create Vue instance
new Vue({
    el: '#app',
    router,
    store,
    i18n
});
