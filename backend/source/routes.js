import { Router } from "express";

import userRoutes from "./applications/users/routes.js";
import pagesRoutes from "./applications/pages/routes.js";
import contentRoutes from "./applications/contents/routes.js";

// middlewares
import Auth from "./middlewares/authorization.js";

// helpers
import UploadImage from "./helpers/file-upload.js";

// auth middleware instance
const auth = new Auth();

// file upload helpers instance
const uploadSingle = new UploadImage();
const uploadMultiple = new UploadImage(false);

const router = Router();

// auth for users are in the user routes
router.use("/users", userRoutes);

router.use("/pages", auth.exec.bind(auth), pagesRoutes);
router.use("/content", auth.exec.bind(auth), contentRoutes);

// file upload router
router.post(
  "/upload",
  auth.exec.bind(auth),
  uploadSingle.uploadSingle.bind(uploadSingle),
);
router.post(
  "/bulk-upload",
  auth.exec.bind(auth),
  uploadMultiple.uploadArray.bind(uploadMultiple),
);

export default router;
