import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const userAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userInfo = req.cookies.userData;
  try {
    const user: any = jwt.verify(
      userInfo,
      `${process.env.ACCESS_TOKEN_SECRET}`,
    );
    if (!user) return res.status(404).json("unauthorised");
    next();
    return;
  } catch (error) {
    return res.status(500).json({ error });
  }
};
