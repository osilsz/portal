import { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: CustomJwtPayload;
  }
}
