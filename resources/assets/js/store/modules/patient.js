
const state = {
    index: null,
    show: null
};

const getters = {
    showProperties (state) {
        return state.show ? state.show.data.properties : [];
    }
};

const actions = {
    async fetchIndex (context, payload) {
        await Vue.axios.get('/patients'+(payload.page ? '?page='+payload.page : '')).then((response) => {
            context.commit('setIndex', response.data);
        });
    },

    async fetchShow (context, payload) {
        await Vue.axios.get('/patients/'+payload).then((response) => {
            context.commit('setShow', response.data);
        });
    }
};

const mutations = {
    setIndex (state, payload) {
        state.index = payload;
    },

    setShow (state, payload) {
        state.show = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
