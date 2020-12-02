import { Request, Response, Router } from "express";
import { validateComment } from "../../../schema/validateComment";
import { createComment, getCommentById } from "../../../controller/comment";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  const allComments = await getCommentById(req.params.id);
  res.status(200).json(allComments);
});

router.post("/", async (req: Request, res: Response) => {
  const validComment = validateComment(req.body);
  if (validComment?.error) {
    return res.status(404).json({ errorMessage: "Invalid comment" });
  }
  const comment = await createComment(validComment?.value);
  return res.status(200).json(comment);
});
router.put("/", async (req: Request, res: Response) => {
  try {
    const validComment = validateComment(req.body);
    if (validComment?.error) {
      return res.status(404).json({ errorMessage: "Invalid comment" });
    }
    const comment = await createComment(validComment?.value);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return;
  }
});

export default router;
