import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default function(){

const Store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    account,
    product
  },
  strict: process.env.DEV
})
  return Store
}
