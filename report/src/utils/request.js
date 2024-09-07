import axios from "axios";
import { ElMessage } from "element-plus";

const CODE_OK = 0;
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 300 * 1000,
});

request.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    config.headers = {
      ...config.headers,
      username: user ? encodeURIComponent(user.userName) : "",
      loginname: user ? user.loginName : "",
      "Application-Token": process.env.VUE_APP_UPM_TOKEN,
      projectId: process.env.VUE_APP_UPM_PROJECT_ID,
      sso_session_id2: localStorage.getItem("main_token"),
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    const { code, msg } = response.data;
    const url = response.config.url || "";
    const showCode = response.config.showCode;
    const showAllRes = response.config.showAllRes;
    const showMsg = response.config.showMsg ?? true;
    const completed = response.config.completed;
    if (code === 100205) {
      ElMessage.error(response.data.message || "网络开小差");

      localStorage.removeItem("main_token");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("hasPermission");
      window.location.reload();
    }

    if (url.includes("user/avatar") || showCode) {
      return Promise.resolve(response.data);
    }
    if (showAllRes) {
      return Promise.resolve(response);
    }

    if (completed) {
      return Promise.resolve(response.data);
    }

    if (code !== CODE_OK && !url.includes("upm")) {
      showMsg && ElMessage.error(msg || "网络开小差");
      return Promise.reject(msg);
    }

    return Promise.resolve(response.data);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;
