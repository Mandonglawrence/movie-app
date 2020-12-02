import { Router } from "express";

import LoginRoutes from "./login/index";
import RegistrationRoutes from "./register/register";

import MovieRoutes from "./movie";
import changePasswordRoute from "./changePassword/index";

const router = Router();

/* Routes */
router.use("/register", RegistrationRoutes);
router.use("/login", LoginRoutes);
router.use("/movie", MovieRoutes);
router.use("/resetpassword", changePasswordRoute);

export default router;
