import { Router } from "express";
import { loginControllerFunction } from "../Controllers/login.controller.js";
import { signupControllerFunction } from "../Controllers/signup.controller.js";
import { signupValidationMiddleware } from "./../Middlewares/signupValidation.middleware.js";
import { loginValidationMiddleware } from "./../Middlewares/loginValidation.middleware.js";

const router = Router();

router.post("/auth/login", loginValidationMiddleware, loginControllerFunction);

router.post(
  "/auth/signup",
  signupValidationMiddleware,
  signupControllerFunction
);

export { router as postRouter };
