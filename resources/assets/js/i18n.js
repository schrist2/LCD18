
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'de',
    messages: {
        de: require('../../lang/de.json')
    }
});

export default i18n;
