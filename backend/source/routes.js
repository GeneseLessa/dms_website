import { Router } from "express";
import managementRoutes from "./management/routes.js";

const router = Router();

router.get("/", (_, res) =>
  res.json({
    message: "welcome to the website backend",
  }),
);

router.use("/management", managementRoutes);

export default router;
