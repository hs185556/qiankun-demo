import "./public-path";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./main.scss";
import { createApp } from "vue";
import App from "./App.vue";
// import { routes } from "./router";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";
import permission from "@/router/permission";
import useSvgIcon from "@/utils/useSvgIcon";

let router = null;
let instance = null;
async function render(props = {}) {
  const {
    container,
    baseRoute = "/report",
    baseRouter,
    dataBus,
    eventBus,
  } = props;
  window.__MICRO_APP_BASE_ROUTE__ = baseRoute;
  window.$baseRouter = baseRouter;
  window.$dataBus = dataBus;
  window.$eventBus = eventBus;

  const routesModule = await import("./router");
  router = createRouter({
    history: createWebHistory("/"),
    routes: routesModule.routes,
  });
  permission(router);
  window.$router = router;

  instance = createApp(App);
  instance
    .use(store)
    .use(router)
    .use(ElementPlus)
    .use(useSvgIcon)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[report] bootstraped");
}
export async function mount(props) {
  console.log("[report] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
}
