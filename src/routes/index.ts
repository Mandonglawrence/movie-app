import { Router } from "express";
import apiV1Route from "./apiv1";
import movieRouter from "../routes/apiv1/movie";
import commentRouter from "../routes/apiv1/comment";
import ratingRouter from "../routes/apiv1/ratings";

const router = Router();

/* GET home page. */
router.use("/", apiV1Route);
router.use("/addfilm", movieRouter);
router.use("/films", movieRouter);
router.use("/films/:name", movieRouter);
router.use("/films/:id", movieRouter);
router.use("/delete/:id", movieRouter);
router.use("/update/:id", movieRouter);
router.use("/addcomment", commentRouter);
router.use("/comments", commentRouter);
router.use("/ratefilm", ratingRouter);

export default router;
