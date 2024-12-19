import { Router
 } from "express";
import { varifyJWT } from "../middleware/auth.middleware.js";
import { getListOfGuests,updateGuestDetails } from "../controllers/guestadmin.controller.js"

 const router = Router();
 router.route("/get-guest-list").get(varifyJWT,getListOfGuests)
 router.route('update-guest').put(varifyJWT,updateGuestDetails)

 export default router;