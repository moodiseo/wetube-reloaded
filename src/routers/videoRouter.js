import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

const onlyNumberId = (req, res, next) => {
  if (!/^\d+$/.test(req.params.id)) return res.sendStatus(404);
  next();
};

videoRouter.get("/upload", upload);
videoRouter.get("/:id", onlyNumberId, see);
videoRouter.get("/:id/edit", onlyNumberId, edit);
videoRouter.get("/:id/delete", onlyNumberId, deleteVideo);

export default videoRouter;
