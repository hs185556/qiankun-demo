import HomeView from "../views/HomeView.vue";

export const routes = [
  {
    path: "",
    name: "Report",
    children: [
      {
        path: "",
        redirect: "about",
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
    ],
  },
];
