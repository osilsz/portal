import "dotenv/config";

const _config = {
  PORT: process.env.PORT as string,
  DATABASE: process.env.DATABASE as string,
  APP_STATUS: process.env.NODE_ENV as string,
  jwtSecret: process.env.JWT_SECRET as string,
};

export const config = Object.freeze(_config);
