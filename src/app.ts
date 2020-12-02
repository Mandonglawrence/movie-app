import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import VersionOneRoute from "./routes";
import passport from "passport";
import initializepassport from "./passport-config";
import session from "express-session";
import flash from "express-flash";
import fs from "fs";
import cors from "cors";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

initializepassport(passport);

const app = express();

app.use(cors());

app.disable("x-powered-by");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

//can access route 'http://localhost:3001/apiv1/'
app.use("/apiv1", VersionOneRoute);

const clientPath = path.join(__dirname, "../", "client/build");

if (fs.existsSync(clientPath)) {
  app.use(express.static(clientPath));
  app.get("/*", (_req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

// catch 404 and forward to error handler
app.use(function (_req: Request, _res: Response, next: NextFunction) {
  next(createError(404));
});
app.use(function (err: HttpError, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: "couldn't access page, please retry again" });
});

export default app;
