import { Router } from "express";
import { enusreAuthenticatedMiddleware } from "../Middlewares/ensureAuthenticated.middleware.js";
import { userInformationController } from "../Controllers/userInfo.controller.js";
import { getCurrentDayData } from "../Controllers/CurrentDayUserData.controller.js";

const router = Router();

router.get("/getTodayStats", enusreAuthenticatedMiddleware, getCurrentDayData);

router.get("/getLoggedUserInfo", userInformationController);

export { router as getRouter };