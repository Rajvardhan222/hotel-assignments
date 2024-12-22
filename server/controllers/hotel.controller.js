import db from "../config/db.js";
import { uploadOnCloudinary } from "../middleware/cloudinary.middleware.js";
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import QRCode from "qrcode";
const generateQR = async text => {
    try {
        const fileName = `qrcode_${Date.now()}.png`;
        const filePath = path.resolve(__dirname, '../public/temp', fileName);
     let qrfile = await QRCode.toFile(filePath, text, {
        type: 'png',
        width: 300,
        margin: 2
      });
      console.log('QR code image generated successfully!');
      let cloudinaryImage = await uploadOnCloudinary(filePath);
        return cloudinaryImage.url;
      
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };
export async function post(req,res) {

    try {
        let {name,address} = await req.body;
        let user = await req.user;
        let logo = await req.file;
        console.log(name,address,logo,user);
        let query = `INSERT INTO hotels(name,address,logo,qr_code,userid) VALUES($1,$2,$3,$4,$5) returning *`;
        let cloudinaryImage = await uploadOnCloudinary(logo.path)
        let qr_code = await generateQR(`${process.env.CLIENT_URL}/guest-register/${name}`);



      await  db.query(query,[name,address,cloudinaryImage.url,qr_code,user.id]);
     
        res.status(200).json({
            status: "success",
            message: "Hotel added successfully",});

    } catch (error) {
        console.log("Error adding hotel: ", error.message);
        console.log(`This error occured inside the post function in hotel.controller.js`);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while adding the hotel",
            errmsg: error.message,
        });
    }
    
}

export async function getAllHotelList(req,res){
    try {
        let user = req.user;
        let query = `SELECT id,name,address,logo FROM hotels WHERE userid=$1`;
        let result = await db.query(query,[user.id]);
        res.status(200).json({
            status: "success",
            message: "Hotel list fetched successfully",
            data: result.rows,
        });
    } catch (error) {
        console.log("Error getting hotel: ", error.message);
        console.log(`This error occured inside the get function in hotel.controller.js`);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while getting the hotel",
            errmsg: error.message,
        });
        
    }
}

export async function getQRcodeByHotelName(req,res) {

    try {
        let {name} = req.params;
        let user = req.user;

        let query = `SELECT qr_code FROM hotels WHERE name=$1 and userid=$2`;
        let result = await db.query(query, [name, user.id]);
        
        res.status(200).json({
            status: "success",
            message: "QR code fetched successfully",
            data: result?.rows[0],
        });
    } catch (error) {
        console.log("Error getting hotel: ", error.message);
        console.log(`This error occured inside the getQRcodeByHotelName function in hotel.controller.js`);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while getting the hotel",
            errmsg: error.message
        
    })
}
    
}