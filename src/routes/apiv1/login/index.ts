import { login } from "../../../controller/login";
import { Router } from "express";

const router = Router();

router.post("/", login);

export default router;
