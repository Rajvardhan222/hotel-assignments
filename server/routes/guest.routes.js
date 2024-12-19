import { Router } from "express";
import { addGuest } from "../controllers/guest.controller.js";
import {varifyJWT} from "../middleware/auth.middleware.js";
const router = Router();
router.route("/add").post(addGuest)

export default router;