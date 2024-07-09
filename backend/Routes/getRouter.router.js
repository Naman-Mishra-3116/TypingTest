import { Router } from "express";
import { enusreAuthenticatedMiddleware } from "../Middlewares/ensureAuthenticated.middleware.js";

const router = Router();

router.get("/getDummyData", enusreAuthenticatedMiddleware, (req, res) => {
  console.log(JSON.stringify(req.user));

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

export { router as getRouter };
