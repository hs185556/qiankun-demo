import HomeView from "../views/HomeView.vue";

const microAppBaseRoute = window.__MICRO_APP_BASE_ROUTE__;

export const routes = [
  {
    path: microAppBaseRoute,
    name: "Report",
    children: [
      {
        path: microAppBaseRoute,
        redirect: microAppBaseRoute + "/about",
      },
      {
        path: "login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "home",
        name: "home",
        component: HomeView,
      },
      {
        path: "about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "compat",
        name: "compat",
        component: () => import("../views/CompatView.vue"),
      },
    ],
  },
];
