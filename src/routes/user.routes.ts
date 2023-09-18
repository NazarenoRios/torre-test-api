import { Router } from "express";
import {
  register,
  login,
  logout,
  validation,
  addToSearchHistory,
  getSearchHistory,
} from "../controllers/user.controllers";

import validateUser from "../middleware/auth";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", validateUser, validation);

router.post("/search/save", validateUser, addToSearchHistory);

router.get("/search/history", validateUser, getSearchHistory);

export default router;
