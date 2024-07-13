import { Router } from "express";
import { enusreAuthenticatedMiddleware } from "../Middlewares/ensureAuthenticated.middleware.js";
import { userInformationController } from "../Controllers/userInfo.controller.js";

const router = Router();

router.get("/getDummyData", enusreAuthenticatedMiddleware, (req, res) => {
  console.log(req.user);

  res.status(200).json({
    data: [
      {
        id: "1",
        wpm: 100,
        total: 1,
      },
      {
        id: "2",
        wpm: 100,
        total: 1,
      },
    ],
  });
});

router.get("/getLoggedUserInfo", userInformationController)

export { router as getRouter };
