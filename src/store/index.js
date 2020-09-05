import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    countAdd(state) {
      state.count++;
    },
    countReduce(state) {
      state.count--;
    }
  },
  actions: {},
  modules: {}
});
