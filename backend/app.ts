import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHadler from "./middlewares/globalErrorHadler";
import createError from "./utils/createErrors";
import userRouter from "./routes/user";
import authHandler from "./middlewares/authHandler";
import productRouter from "./routes/crud";
import { getHeader } from "./utils/access";
const app = express();

// Third party middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// App routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

//basic type anotations in typescript

interface createUser {
  name: string;
  email: string;
  password: string;
}

interface UserPayload {
  id: string;
}

app.post(
  "/:id",
  (
    request: Request<{}, {}, createUser, UserPayload>,
    response: Response,
    next: NextFunction
  ) => {
  }
);

// Global error handler
app.use(globalErrorHadler);

export default app;
