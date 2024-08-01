import { Router } from "express";

import userRoutes from "./applications/users/routes.js";
import pagesRoutes from "./applications/pages/routes.js";
import contentRoutes from "./applications/contents/routes.js";

const router = Router();

router.get("/", (_, res) =>
  res.json({ message: "Welcome to website backend API" }),
);

router.use("/users", userRoutes);
router.use("/pages", pagesRoutes);
router.use("/content", contentRoutes);

export default router;
