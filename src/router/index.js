import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import Users from "@/pages/users/Users";
import CreateUser from "@/pages/users/Create";
import EditUser from "@/pages/users/Edit";
import User from "@/pages/users/User";
import PerformanceReview from "@/pages/performanceReviews/PerformanceReview";
import PerformanceReviews from "@/pages/performanceReviews/PerformanceReviews";
import CreateReview from "@/pages/performanceReviews/Create";
import EditPerformance from "@/pages/performanceReviews/Edit";

import Dashboard from "@/components/Dashboard";
import DashboardHome from "@/pages/Home";
import Feedbacks from "@/pages/feedback/Feedbacks";
import Login from "../pages/auth/Login.vue";
Vue.use(Router);

const adminMiddleware = (to, from, next) => {
  const user = store.getters["auth/getUser"];
  if (!user) {
    next({ name: "login" });
  } else if (!user.is_admin) {
    next({ name: "DashboardHome" });
  }
  next();
};

const routes = [
  { path: "/", redirect: { name: "DashboardHome" } },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "/", redirect: { name: "DashboardHome" } },
      { path: "home", name: "DashboardHome", component: DashboardHome },
      {
        path: "users",
        name: "users",
        component: Users,
        beforeEnter: adminMiddleware,
      },
      {
        path: "users/:id/edit",
        name: "editUser",
        component: EditUser,
        beforeEnter: adminMiddleware,
      },
      {
        path: "performance-reviews",
        name: "performanceReview",
        component: PerformanceReviews,
        beforeEnter: adminMiddleware,
      },
      {
        path: "users/create",
        name: "createUser",
        component: CreateUser,
        beforeEnter: adminMiddleware,
      },
      {
        path: "feedbacks",
        name: "feedback",
        component: Feedbacks,
      },
      {
        path: "performance-reviews/create",
        name: "createPerformanceReview",
        component: CreateReview,
        beforeEnter: adminMiddleware,
      },
      {
        path: "performance-reviews/:id/edit",
        name: "editPerformance",
        component: EditPerformance,
        beforeEnter: adminMiddleware,
      },
      {
        path: "users/:id",
        name: "showUser",
        component: User,
      },
      {
        path: "performance-reviews/:id",
        name: "showPerformance",
        component: PerformanceReview,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: adminMiddleware,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
