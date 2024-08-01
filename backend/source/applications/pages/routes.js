import { Router } from "express";
import CRUDActions from "../../middlewares/crud.js";

import pages from "./models/pages.js";

const actions = new CRUDActions(pages);
const router = Router();

router.post("/create", actions.create.bind(actions));
router.post("/read", actions.read.bind(actions));
router.post("/update", actions.update.bind(actions));
router.post("/delete", actions.delete.bind(actions));

export default router;
