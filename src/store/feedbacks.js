import { feedbacks } from "@/api/feedbacks";
export default {
  namespaced: true,
  name: "feedbacks",

  state: () => ({
    feedbacks: [],
    meta: {},
  }),
  getters: {
    feedbacks(state) {
      return state.feedbacks;
    },
  },
  actions: {
    async getFeedbacks({ commit }) {
      // call api to get feedbacks where reviewer_id == authenticated user_id

      commit("SET_FEEDBACKS", feedbacks);
    },
    async changeStatus({ commit, state }, id) {
      //   call api to get feedbacks for change status
      const feedbacks = state.feedbacks.map((feedback) => {
        if (feedback.id == id) {
          feedback.status = "submitted";
          return feedback;
        }
        return feedback;
      });

      commit("SET_FEEDBACKS", feedbacks);
    },
  },
  mutations: {
    SET_FEEDBACKS(state, feedbacks) {
      state.feedbacks = feedbacks;
    },
  },
};
