import { NextFunction, Request, Response } from "express";
import createError from "../utils/createErrors";
import { JwtPayload, verify } from "jsonwebtoken";
import { config } from "../config/config";
import { CustomJwtPayload } from "../types/types";

// export interface RequestWithUser extends Request {
//   user: string;
// }

const authHandler = (req: Request, res: Response, next: NextFunction) => {
  // TODO: extract token from request header
  // const token = req.headers.authorization?.split(" ")[1];
  const token = req.cookies.Accesstoken;

  // TODO: validate token

  if (!token) {
    return next(createError(401, "Authorization token is required."));
  }

  try {
    // TODO: decode token
    const decoded = verify(
      token,
      config.jwtSecret as string
    ) as CustomJwtPayload;

    if (!decoded) {
      return next(createError(401, "Unauthorized"));
    }

    // TODO: attach user infomations to request object

    // const _req = req as RequestWithUser;

    // _req.user = decoded as string;

    req.user = decoded;

    next();
  } catch (error) {
    return next(createError(401, "Unauthorized"));
  }
};

export default authHandler;
