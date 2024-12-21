import { Router } from "express";
import { varifyJWT } from "../middleware/auth.middleware.js";
import {
  getGuestById,
  getListOfGuests,
  updateGuestDetails,
} from "../controllers/guestadmin.controller.js";

const router = Router();
router.route("/get-guest-list").get(varifyJWT, getListOfGuests);
router.route("/update-guest/:id").put(varifyJWT, updateGuestDetails);
router.route("/get-guest/:id").get(varifyJWT, getGuestById);
export default router;
