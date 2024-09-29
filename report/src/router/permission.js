import { hasToken } from "@/utils";

export default (router) => {
  const whiteList = ["login"];

  router.beforeEach(async (to, _, next) => {
    // console.log('>>>to report:', to.fullPath)
    if (!hasToken()) {
      if (!whiteList.includes(to.name)) {
        return next(window.__MICRO_APP_BASE_ROUTE__ + "/login");
      } else {
        return next();
      }
    }

    next();
  });

  router.afterEach(() => {});
};
