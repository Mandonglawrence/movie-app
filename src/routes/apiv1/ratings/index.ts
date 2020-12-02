import { Request, Response, Router } from "express";
import { rateFilm, getFilmRate, updateRate } from "../../../controller/rating";
import { validateRating } from "../../../schema/validateRating";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const validRating = validateRating(req.body);
  if (validRating?.error) {
    return res.status(404).json({ errorMessage: "Invalid rating" });
  }
  const rated = await getFilmRate(validRating?.value.films_id);
  let result;
  if (rated[0]) {
    updateRate(
      rated[0].films_id,
      rated[0].rating,
      rated[0].total_rated_users,
      validRating?.value.rating,
    );
    result = rated;
    return res.status(200).json(result);
  }
  result = await rateFilm(validRating?.value);
  return res.status(200).json(result);
});

export default router;
