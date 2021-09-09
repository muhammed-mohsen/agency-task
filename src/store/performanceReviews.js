import { performanceReviews } from "@/api/performanceReviews";
export default {
  namespaced: true,
  name: "performanceReviews",

  state: () => ({
    performanceReviews: [],
    meta: {},
  }),
  getters: {
    performanceReviews(state) {
      return state.performanceReviews;
    },

    meta(state) {
      return state.meta;
    },
  },
  actions: {
    async getPerformanceReviews({ commit }) {
      commit("SET_PERFROMANCE_REVIEWS", performanceReviews);
    },
    async create(_, form) {
      // state.performanceReviews.push(form);
      console.log(form);
      // call api request
      // commit("SET_PERFROMANCE_REVIEWS", state.performanceReviews);
    },

    async destroy({ commit, state }, userId) {
      const performanceReviews = state.performanceReviews.filter(
        (user) => user.id != userId
      );
      commit("SET_PERFROMANCE_REVIEWS", performanceReviews);
    },
  },
  mutations: {
    SET_PERFROMANCE_REVIEWS(state, performanceReviews) {
      state.performanceReviews = performanceReviews;
    },
    SET_USER(state, user) {
      state.user = user;
    },

    APPEND_PERFROMANC_REVIEWS({ state }, performanceReviews) {
      state.performanceReviews = state.performanceReviews.concat(
        performanceReviews
      );
    },
  },
};
