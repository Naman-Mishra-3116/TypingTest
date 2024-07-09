import joi from "joi";

export const signupValidationMiddleware = function (req, res, next) {
  const { username, email, password } = req.body;

  const schema = joi.object({
    username: joi.string().min(8).max(16).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(10).required(),
  });

  const { error } = schema.validate({ username, email, password });
  if (error) {
    return res
      .status(400)
      .json({ message: "Bad Request", success: false, error: error.message });
  }

  next();
};