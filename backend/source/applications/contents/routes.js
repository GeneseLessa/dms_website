import { Router } from "express";

import CRUDAction from "../../middlewares/crud.js";

// all content models
import forms from "./models/forms.js";
import list from "./models/list.js";
import location from "./models/location.js";
import pictures from "./models/pictures.js";
import textual from "./models/textual.js";

// crud objects
const formsActions = new CRUDAction(forms);
const listActions = new CRUDAction(list);
const locationActions = new CRUDAction(location);
const picturesActions = new CRUDAction(pictures);
const textualActions = new CRUDAction(textual);

const router = Router();

// forms
router.post("/forms/create", formsActions.create.bind(formsActions));
router.post("/forms/read", formsActions.read.bind(formsActions));
router.post("/forms/update", formsActions.update.bind(formsActions));
router.post("/forms/delete", formsActions.delete.bind(formsActions));

// list
router.post("/list/create", listActions.create.bind(listActions));
router.post("/list/read", listActions.read.bind(listActions));
router.post("/list/update", listActions.update.bind(listActions));
router.post("/list/delete", listActions.delete.bind(listActions));

// location
router.post("/location/create", locationActions.create.bind(locationActions));
router.post("/location/read", locationActions.read.bind(locationActions));
router.post("/location/update", locationActions.update.bind(locationActions));
router.post("/location/delete", locationActions.delete.bind(locationActions));

// pictures
router.post("/pictures/create", picturesActions.create.bind(picturesActions));
router.post("/pictures/read", picturesActions.read.bind(picturesActions));
router.post("/pictures/update", picturesActions.update.bind(picturesActions));
router.post("/pictures/delete", picturesActions.delete.bind(picturesActions));

// textual
router.post("/textual/create", textualActions.create.bind(textualActions));
router.post("/textual/read", textualActions.read.bind(textualActions));
router.post("/textual/update", textualActions.update.bind(textualActions));
router.post("/textual/delete", textualActions.delete.bind(textualActions));

export default router;
