import { Request, Response } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passport.authenticate("local", function (err, user, info): any {
    if (err !== null) {
      return res.status(500).json({ err });
    }
    try {
      if (user) {
        const access_token = jwt.sign(
          user,
          `${process.env.ACCESS_TOKEN_SECRET}`,
          { expiresIn: "5m" },
        );
        res.cookie("userData", access_token);
        return res.status(200).json({
          user: {
            created: user.created_at,
            id: user.id,
            email: user.email,
            name: user.name,
            is_admin: user.is_admin,
          },
        });
      } else {
        return res.status(401).json(info);
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  })(req, res);
};
