import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/router/permission";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
