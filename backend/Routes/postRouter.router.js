import { Router } from "express";
import { loginControllerFunction } from "../Controllers/login.controller.js";
import { signupControllerFunction } from "../Controllers/signup.controller.js";
import { signupValidationMiddleware } from "./../Middlewares/signupValidation.middleware.js";
import { loginValidationMiddleware } from "./../Middlewares/loginValidation.middleware.js";
import { enusreAuthenticatedMiddleware } from "./../Middlewares/ensureAuthenticated.middleware.js";
import { passWordValidationMiddeWare } from "../Middlewares/passwordValidation.middleware.js";
import { changePasswordControllerFunction } from "../Controllers/changePassword.controller.js";

const router = Router();

router.post("/auth/login", loginValidationMiddleware, loginControllerFunction);

router.post(
  "/auth/signup",
  signupValidationMiddleware,
  signupControllerFunction
);

router.post(
  "/auth/changePassword",
  enusreAuthenticatedMiddleware,
  passWordValidationMiddeWare,
  changePasswordControllerFunction
);
export { router as postRouter };
