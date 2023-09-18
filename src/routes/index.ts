import { Router } from "express";
const router = Router();

import users from "./user.routes";
import favorites from "./favorite.routes";

router.use("/users", users);
router.use("/favorites", favorites);

export default router;
