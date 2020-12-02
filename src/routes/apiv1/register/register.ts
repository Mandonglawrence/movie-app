import { Request, Response, Router } from "express";
import controller from "../../../controller/register";
import { OK } from "http-status-codes";
const router = Router();

/* Registration Route. */
router.get("/", async function (_req: Request, res: Response) {
  res.status(200).json({ successs: "welcome" });
});
router.post("/", async function (req: Request, res: Response) {
  const user = await controller.registerUser(req.body);
  return res.status(OK).json({ data: user });
});

router.post("/confirm/:resetLink", async (req: Request, res: Response) => {
  const parent_id = req.params.resetLink;
  const editAccount = await controller.confirmEmail(parent_id);
  return res.status(OK).json({ Account: editAccount });
});

export default router;
