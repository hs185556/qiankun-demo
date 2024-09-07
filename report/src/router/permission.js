import router from "./index";
import { hasToken } from "@/utils";

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

export default router;
