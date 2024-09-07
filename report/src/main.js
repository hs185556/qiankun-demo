import "./public-path";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { createRouter, createWebHistory } from "vue-router";
import "@/router/permission";

let instance = null;
function render(props = {}) {
  const { container } = props;

//   const router = createRouter({
//     history: createWebHistory(
//       window.__POWERED_BY_QIANKUN__ ? "/child/report" : "/report"
//     ),
//     routes,
//   });

  instance = createApp(App)
    .use(store)
    .use(router)
    .use(ElementPlus)
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
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
