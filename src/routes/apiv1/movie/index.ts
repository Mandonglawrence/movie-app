import { Request, Response, Router } from "express";
import { validateMFilmInfo } from "../../../schema/validateFilmInfo";
import { adminAuthorization } from "../../../middleware/checkAdmin";
import {
  getFilmByName,
  createFilm,
  getAllFilms,
  getFilmById,
  deleteFilmById,
  updateFilm,
} from "../../../controller/addFilm";

const router = Router();

/* get all */
router.get("/", async function (_req: Request, res: Response) {
  try {
    const allFilms = await getAllFilms();
    return res.status(200).json(allFilms);
  } catch (error) {
    return res.status(404).json({ errorMessage: "Could not get films" });
  }
});

// get by name
router.get("/:name", async function (req: Request, res: Response) {
  try {
    const allFilms = await getFilmByName(`${req.params.name}`);
    console.log(allFilms);

    return res.status(200).json(allFilms);
  } catch (error) {
    return res.status(404).json({ errorMessage: "Could not get film" });
  }
});

// get by id
router.get("/film_id/:id", async function (req: Request, res: Response) {
  try {
    console.log(req.params.id);
    const filmId: string = req.params.id;

    const allFilms = await getFilmById(filmId);
    console.log(allFilms);
    return res.status(200).json(allFilms);
  } catch (error) {
    return res.status(404).json({ error: "Could not get film" });
  }
});

//delete by id
router.delete(
  "/delete/:id",
  /*adminAuthorization,*/ async function (req: Request, res: Response) {
    try {
      // console.log(req.params.id);
      const filmId: string = req.params.id;
      const filmReturn = await getFilmById(filmId);
      if (!filmReturn.count) {
        return res.status(404).json({
          message: "The film you are trying to delete does not exist",
        });
      }
      const allFilms = await deleteFilmById(filmId);
      console.log(allFilms);
      return res
        .status(200)
        .json({ message: `${allFilms[0].name} has been deleted successfully` });
    } catch (error) {
      return res.status(404).json(error);
    }
  },
);

//create film
router.post(
  "/",
  /*adminAuthorization,*/ async function (req: Request, res: Response) {
    console.log(req.body);
    const validFilmInfo = await validateMFilmInfo(req.body);
    if (validFilmInfo?.error) {
      console.log(validFilmInfo?.error.message);
      return res.status(400).json({ error: "Invalid data" });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filmExists: any = await getFilmByName(validFilmInfo?.value.name);

    if (filmExists.count) {
      return res.json({ message: "Film already exist" });
    }

    const myFilm = await createFilm(validFilmInfo?.value);

    return res.status(200).json(myFilm);
  },
);

//update film

router.put("/update/:id", adminAuthorization, async function (
  req: Request,
  res: Response,
) {
  const validFilmInfo = await validateMFilmInfo(req.body);
  if (validFilmInfo?.error) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const filmExists = await getFilmById(req.params.id);

  if (!filmExists.count) {
    return res.json({ message: "Film does not exist" });
  }

  const myFilm = await updateFilm(validFilmInfo?.value, req.params.id);

  return res.status(200).json(myFilm);
});

export default router;
