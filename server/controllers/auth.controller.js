import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../config/db.js";

export async function createHotelAdminAccount(req, res) {
  try {
    let { username, password } = await req.body;
    console.log(username)

    let query1 = `SELECT * FROM user_hotel_admin WHERE username = $1`;

    let result1 = await db.query(query1, [username]);
    if (result1.rows.length > 0) {
      //login the user
      let isPasswordCorrect = bcrypt.compareSync(
        password,
        result1.rows[0].password
      );
      if (!isPasswordCorrect) {
        return res.status(504).json({
          status: "error",
          message:
            "The password you entered for this account is incorrect please check it and try again",
        });
      }

      let jwtsigned = jwt.sign(
        { username: result1.rows[0].username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
      );

      let cookie = res.status(200).cookie("accessToken", jwtsigned);
      return cookie.json({
        status: "success",
        message: "Login Success. Happy Day",
      });
    }

    let jwtsign = jwt.sign(
      { username: username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    );

    let hashedPassword = await bcrypt.hash(password, 10);

    let query = `INSERT INTO user_hotel_admin(username,password) VALUES($1,$2) RETURNING *`;

    await db.query(query, [username, hashedPassword]);

    let cookie = res.status(200).cookie("accessToken", jwtsign);
    return cookie.json({
      status: "success",
      message: "Hotel admin account created successfully",
    });
  } catch (error) {
    console.log("Error creating hotel admin account: ", error.message);
    console.log(
      `This error occured inside the createHotelAdminAccount function in auth.controller.js`
    );
    res.status(500).json({
      status: "error",
      message: "Something went wrong while creating the hotel admin account",
      errmsg: error.message,
    });
  }
}
