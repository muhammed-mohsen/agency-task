import { users } from "@/api/users";
import router from "../router";
export default {
  name: "auth",
  namespaced: true,
  state: () => ({
    token: "s,fjaljlsaf",
    user: {
      id: 1,
      name: "muhammed",
      phone: "01062006209",
      email: "s@s.s",
      is_admin: true,
    },
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const user = users.find(
        (user) => user.email.toLowerCase() == credentials.email.toLowerCase()
      );
      if (user) {
        commit("SET_USER", user);
        router.push("/dashboard");
        return;
      }
      alert("invalid credentials");
    },
  },
};
