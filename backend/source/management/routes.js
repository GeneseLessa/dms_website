import { Router } from "express";
import firstUser from "./controllers/first-user.js";

const router = Router();

router.post("/first-user", (req, res) => firstUser.firstUser(req, res));

export default router;
