import { Router } from "express";

import CRUDActions from "../../middlewares/crud.js";
import validateLogin from "./middlewares/validate-login.js";
import validateFirstUser from "./middlewares/validate-first-user.js";

import firstUser from "./actions/first-user.js";
import authenticate from "./actions/authenticate.js";

import user from "./models/users.js";

const actions = new CRUDActions(user);
const router = Router();

router.post("/first-user", validateFirstUser, (req, res) =>
  firstUser(req, res),
);

router.post(
  "/authenticate",
  validateLogin,
  authenticate.checkLogin.bind(authenticate),
);

router.post("/create", actions.create.bind(actions));
router.post("/read", actions.read.bind(actions));
router.post("/update", actions.update.bind(actions));
router.post("/delete", actions.delete.bind(actions));

export default router;
