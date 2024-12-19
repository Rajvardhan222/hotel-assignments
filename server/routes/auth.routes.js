import { Router } from "express";
import { createHotelAdminAccount } from "../controllers/auth.controller.js";

const router = Router();

router.route("/login").post(createHotelAdminAccount)

export default router;