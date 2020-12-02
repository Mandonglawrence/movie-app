import { getUserByEmail, getUserById } from "./controller/queries";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function initialize(passport: any) {
  const authenticateUser = async (
    email: string,
    password: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    done: any,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user: any = await getUserByEmail(email);

    console.log("the user", user);

    if (user === undefined) {
      console.log("No such User");
      return done(null, false, { maessage: "No user with that email" });
    }

    try {
      if (await bcrypt.compare(password, user.password!)) {
        console.log("correct password");
        return done(null, user);
      } else {
        console.log("Incorrect password");
        return done(null, false, { maessage: "password incorrect" });
      }
    } catch (error) {
      return done(error);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passport.serializeUser((user: any, done: any) => done(null, user.user_id));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passport.deserializeUser((id: any, done: (arg0: any) => any) => {
    return done(getUserById(id));
  });
}

export default initialize;
