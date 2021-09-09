import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import users from "./users";
import performanceReviews from "./performanceReviews";
import sidebar from "./sidebar";
import feedbacks from "./feedbacks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    sidebar,
    users,
    feedbacks,
    performanceReviews,
  },
});
