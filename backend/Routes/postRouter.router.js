import { Router } from "express";
import { loginControllerFunction } from "../Controllers/login.controller.js";
import { signupControllerFunction } from "../Controllers/signup.controller.js";
import { signupValidationMiddleware } from "./../Middlewares/signupValidation.middleware.js";
import { loginValidationMiddleware } from "./../Middlewares/loginValidation.middleware.js";
import { enusreAuthenticatedMiddleware } from "./../Middlewares/ensureAuthenticated.middleware.js";
import { passWordValidationMiddeWare } from "../Middlewares/passwordValidation.middleware.js";
import { changePasswordControllerFunction } from "../Controllers/changePassword.controller.js";
import { submitIndiviudalTestController } from "../Controllers/submitIndividualTest.controller.js";

const router = Router();

/**
 * @login Post router for handling login requests with validation middleware.
 */

router.post("/auth/login", loginValidationMiddleware, loginControllerFunction);

/**
 * @singup Post router for handling signup request with validation middleware
 */

router.post(
  "/auth/signup",
  signupValidationMiddleware,
  signupControllerFunction
);

/**
 * @passwordChanging Post router for changing the password of the user when the user loged in.
 */
router.post(
  "/auth/changePassword",
  enusreAuthenticatedMiddleware,
  passWordValidationMiddeWare,
  changePasswordControllerFunction
);

/**
 * @submitTest Post router for submitting individual test taken by the user when the user is logged in.
 */

router.post(
  "/test/submitTest",
  enusreAuthenticatedMiddleware,
  submitIndiviudalTestController
);

export { router as postRouter };
