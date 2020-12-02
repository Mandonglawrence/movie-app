import { Router } from "express";
import {
  changePassword,
  resetPassword,
} from "../../../controller/forgetPassword";

const router = Router();

router.put("/", changePassword);
router.put("/reset/:id", resetPassword);

export default router;
