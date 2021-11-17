import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
const rateLimit = require('express-rate-limit');
import compression from "compression";
import helmet from "helmet";
import { errorHandler } from '../middlewares/error-handler';
import { NotFoundError } from '../utils/common/errors/not-found-error';
import { prefix } from "../configs/index";
import { routes } from '../api/v1/index';
const app = express()
  app.enable("trust proxy");
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  // app.use(morgan("dev"));
  app.use(helmet());
  app.use(compression());
  app.disable("x-powered-by");
  app.disable("etag");
// Rate limiting
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 mins
  max: 40
});
app.use(limiter);
  app.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Content-Security-Policy-Report-Only", "default-src: https:");
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT POST PATCH DELETE GET");
      return res.status(200).json({});
    }
    next();
  });

// mount routes

app.get('/api/users/test', (req:Request, res:Response) => {
    
  res.status(200).json("ok")
})
app.use(prefix, routes);

app.all("*", (req: Request, res: Response) => {
  throw new NotFoundError();
})
app.use(errorHandler)
export { app };