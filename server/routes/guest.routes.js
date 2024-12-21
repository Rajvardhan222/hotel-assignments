import { Router } from "express";
import { addGuest, getHotelIdByName } from "../controllers/guest.controller.js";
import {varifyJWT} from "../middleware/auth.middleware.js";
const router = Router();
router.route("/add").post(addGuest)
router.route('/get-hotel-by-name/:name').get(getHotelIdByName)


export default router;