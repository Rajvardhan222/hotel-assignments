
import  jwt  from "jsonwebtoken";
import db from "../config/db.js";
export let varifyJWT = async (req,res,next)=>{
   try {
   
     let token = req?.cookies.accessToken;
     
 
     if (!token) {
        return res.status(400).json({
            status: "error",
            message: "Invalid Access",
        });
     }
 
   const decodedToken =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
   console.log("decodedToken",decodedToken);
   
   let user =await db.query(`SELECT * FROM user_hotel_admin WHERE username = $1`,[decodedToken.username])
   console.log(user)
   if (!user.rowCount) {
     
    return res.status(400).json({
        status: "error",
        message: "Invalid Access",
    });
   }
   console.log('logout',user);
   req.user = user.rows[0];
   next()
   } catch (error) {
      console.log("Error verifying token: ", error.message);
      console.log(`This error occured inside the varifyJWT function in auth.middleware.js`);
      res.status(500).json({
          status: "error",
          message: "Something went wrong while verifying the token",
          errmsg: error.message,
      });
   }

}

