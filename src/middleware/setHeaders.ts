import { Request, Response, NextFunction } from "express";
import checkNodeEnvironment from "../utils/checkNodeEnvironment";

const origin = checkNodeEnvironment(
  "https://bonum-movies.vercel.app",
  "http://localhost:3000"
);

const setHeaders = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", origin);

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );

  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
};

export default setHeaders;
