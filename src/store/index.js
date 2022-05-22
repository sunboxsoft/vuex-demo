import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const caculate = {
    namespaced: true,
    state: {
        name: 'jiaguoqiang'
    },
    getters: {
        getName(state) {
            return "【" + state.name + "】"
        }
    },
    mutations: {
        add(state, str) {
            state.name += str
        }
    },
    actions: {
        AsyncAdd(context, str) {
            setTimeout(() => {
                context.commit('add', str + 111)
            }, 2000);
        }
    }
}
export default new Vuex.Store({
    modules: {
        c: caculate
    }
})