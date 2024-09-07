import { hasToken } from "@/utils";

export default (router) => {
  const whiteList = ["login"];

  router.beforeEach(async (to, _, next) => {
    if (!hasToken()) {
      if (!whiteList.includes(to.name)) {
        return next("/login");
      } else {
        return next();
      }
    }

    next();
  });

  router.afterEach(() => {});
};
