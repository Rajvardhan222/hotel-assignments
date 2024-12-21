import { Router } from "express";
import { createHotelAdminAccount, isUserLoggedIn } from "../controllers/auth.controller.js";
import { varifyJWT } from "../middleware/auth.middleware.js";
const router = Router();

router.route("/login").post(createHotelAdminAccount)
router.route('/isloggedin').get(varifyJWT,isUserLoggedIn)

export default router;