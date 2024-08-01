import { Router } from "express";

import userRoutes from "./applications/users/routes.js";
import pagesRoutes from "./applications/pages/routes.js";
import contentRoutes from "./applications/contents/routes.js";

// imports for file upload
import UploadImage from "./helpers/file-upload.js";

const uploadSingle = new UploadImage();
const uploadMultiple = new UploadImage(false);

const router = Router();

router.use("/users", userRoutes);
router.use("/pages", pagesRoutes);
router.use("/content", contentRoutes);

// file upload router
router.post("/upload", uploadSingle.uploadSingle.bind(uploadSingle));
router.post("/bulk-upload", uploadMultiple.uploadArray.bind(uploadMultiple));

export default router;
