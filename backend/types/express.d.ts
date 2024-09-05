import { Request } from 'express';


declare global {
    namespace Express {
      interface Request {
        name?: string; // Optional if not set on every request
      }
    }
  }