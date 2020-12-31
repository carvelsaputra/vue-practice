import Vue from "vue";
import Vuex from "vuex";

import counter from "./modules/counter.js"
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  getters: {
    value: (state) => {
      return state.value;
    },
  },
  mutations: {
    updatedValue: (state, payload) => {
      state.value = payload;
    },
  },
  actions: {
    //   increment: context => {
    //       context.commit('increment');
    //   }

    updateValue: ({ commit }, payload) => {
      commit("updatedValue", payload);
    },
  },
  modules:{
    counter
  }
});
