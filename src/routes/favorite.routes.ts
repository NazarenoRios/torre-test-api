import {
  add_favorite,
  get_favorites,
  remove_favorite,
} from "../controllers/favorite.controller";
import { Router } from "express";

import validateUser from "../middleware/auth";

const router = Router();

router.get("/getFavorites", validateUser, get_favorites);

router.post("/addFavorite", validateUser, add_favorite);

router.post("/removeFavorite/:favoriteId", validateUser, remove_favorite);

export default router;
