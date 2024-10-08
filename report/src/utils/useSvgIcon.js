import Svgicon from "@/components/svgIcon.vue";

const req = require.context("/src/assets/svg", true, /\.svg$/);
req.keys().forEach(req);

export default {
  install(app) {
    app.component("svg-icon", Svgicon);
  },
};
