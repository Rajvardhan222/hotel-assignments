import db from "./config/db.js";
import { app } from "./server/server.js";
import * as fs from 'fs';


import dotenv from "dotenv";

dotenv.config({
    path: ".env"
});
let sql_hotel = fs.readFileSync('models/hotel.sql').toString();
let sql_guest = fs.readFileSync('models/guests.sql').toString();
let sql_hotel_guest = fs.readFileSync('models/hotel_guest.sql').toString();
let sql_hotel_user = fs.readFileSync('models/userhotel.sql').toString(); 

const port = process.env.PORT || 8845;
app.listen(port,'0.0.0.0', async() => {
    try {
        console.log("Server started on port: ", port);
        console.log(process.env.BASE_URL);
        // await db.query(sql_hotel_user)
        // console.log("HotelUser table created")
        // await db.query(sql_hotel)
        // console.log("Hotel table created")
        // await db.query(sql_guest)
        // console.log("Guest table created")
        // await db.query(sql_hotel_guest)
        // console.log("Hotel_guest table created")
        
        
        
    } catch (error) {
        console.log("Error starting server: ", error.message);
    }
})