import express, { NextFunction, Request, Response } from "express";
import { getUser, loginUser, registerUser } from "../controllers/user";
import authHandler from "../middlewares/authHandler";
import createError from "../utils/createErrors";
import User from "../models/userModel";
const userRouter = express.Router();

// create user Register
userRouter.post("/register", registerUser);

// create user Login
userRouter.post("/login", loginUser);

// get all users
userRouter.get("/", authHandler, getUser);

// currently logged in user
userRouter.get(
  "/me",
  authHandler,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      //  if user not found
      if (!user) {
        return next(createError(400, "User not found"));
      }

      //logged in user
      const loggedInUser = await User.findById(user.id);

      res.status(200).json({
        user: loggedInUser,
      });
    } catch (error) {}
  }
);

// logout user
userRouter.get("/logout", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.cookie("Accesstoken", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default userRouter;
