import { users } from "@/api/users";
export default {
  namespaced: true,
  name: "users",

  state: () => ({
    users: [],
    user: {},
    meta: {},
  }),
  getters: {
    users(state) {
      return state.users;
    },
    user(state) {
      return state.user;
    },
    meta(state) {
      return state.meta;
    },
  },
  actions: {
    async getUsers({ commit }) {
      // call api to get users

      commit("SET_USERS", users);
      // if (page !== 1) {
      //   commit("APPEND_USERS", users);
      // } else {
      // }
      // commit("SET_USERS_PAGINATION", meta);
    },
    async create({ commit, state }, form) {
      // call api to create user
      state.users.push(form);
      //   console.log(
      //     "🚀 ~ file: users.js ~ line 1 ~ destroy ~ state.users",
      //     state.users,
      //     users,
      //     form
      //   );

      commit("SET_USERS", state.users);
    },
    async getUser({ commit }, userId) {
      const { data: user } = await this.$axios.$get(`/users/${userId}`);

      commit("SET_USER", user);
    },
    async destroy({ commit, state }, userId) {
      //call api delete user from db

      const users = state.users.filter((user) => user.id != userId);
      commit("SET_USERS", users);
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USER(state, user) {
      state.user = user;
    },

    SET_USERS_PAGINATION(state, meta) {
      state.meta = meta;
    },
    APPEND_USERS({ state }, users) {
      state.users = state.users.concat(users);
    },
  },
};
