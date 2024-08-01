import { Router } from "express";

import CRUDActions from "../../middlewares/crud.js";
import validateLogin from "./middlewares/validate-login.js";
import validateFirstUser from "./middlewares/validate-first-user.js";

import firstUser from "./actions/first-user.js";
import authenticate from "./actions/authenticate.js";

import user from "./models/users.js";

import Auth from "../../middlewares/authorization.js";

const actions = new CRUDActions(user);
const auth = new Auth();

const router = Router();

router.post("/first-user", validateFirstUser, (req, res) =>
  firstUser(req, res),
);

router.post(
  "/authenticate",
  validateLogin,
  authenticate.checkLogin.bind(authenticate),
);

router.post("/create", auth.exec.bind(auth), actions.create.bind(actions));
router.post("/read", auth.exec.bind(auth), actions.read.bind(actions));
router.post("/update", auth.exec.bind(auth), actions.update.bind(actions));
router.post("/delete", auth.exec.bind(auth), actions.delete.bind(actions));

export default router;
