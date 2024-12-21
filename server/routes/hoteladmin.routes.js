import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { getAllHotelList, post ,getQRcodeByHotelName} from "../controllers/hotel.controller.js";
import { varifyJWT } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/add").post(varifyJWT,upload.single("logo"),post)
router.route("/list").get(varifyJWT,getAllHotelList)
router.route("/qr/:name").get(varifyJWT,getQRcodeByHotelName)


export default router;