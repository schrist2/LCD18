
const state = {
    list: {
        items: [],
        meta: {}
    },
    current: {}
};

const getters = {
    list () {
        return state.list;
    },

    current (state) {
        return state.current;
    }
};

const actions = {
    async fetchList (context, payload) {
        await Vue.axios.get('/patients'+(payload.page ? '?page='+payload.page : '')).then((response) => {
            context.commit('setList', { items: [ ...response.data.data ], meta: response.data.meta });
        });
    },

    async fetchCurrent (context, payload) {
        await Vue.axios.get('/patients/'+payload).then((response) => {
            context.commit('setCurrent', response.data.data);
        });
    }
};

const mutations = {
    setList (state, payload) {
        state.list = payload;
    },

    setCurrent (state, payload) {
        state.current = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
