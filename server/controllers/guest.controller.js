import db from "../config/db.js";

async function addGuest(req,res) {
    try {
        let {name, email, phone, address, hotel_id,purposeOfVisit,from,to,idProff} = req.body;


        if(!name || !email || !phone || !address || !hotel_id || !purposeOfVisit || !from || !to || !idProff){
            return res.status(400).json({
                status: "error",
                message: "Please fill all the fields",
            })
        }

        // check if this guest already have an account with us

        let checkQuery = `SELECT * FROM hotel_guest hg JOIN guests g ON hg.guest = g.id WHERE hg.hotel = $1 AND (g.email = $2 AND g.phone = $3)`;

        let checkResult = await db.query(checkQuery,[hotel_id,email,phone]);
      console.log(hotel_id,email,phone,checkResult.rows)

        if (checkResult.rows.length > 0) {

            return res.status(400).json({

             status: "error",

              message: "Guest with this email or phone number already exists in this hotel",

               });

            }

        


        let query = `INSERT INTO guests(name,email,phone,address,purposeOfVisit,stayFrom,stayTo,idProofNo) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`;

        let result = await db.query(query,[name,email,phone,address,purposeOfVisit,from,to,idProff]);

        let query2 = `INSERT INTO hotel_guest(hotel,guest) VALUES($1,$2)`;

        await db.query(query2,[hotel_id,result.rows[0].id]);

        res.status(200).json({
            status: "success",
            message: "Guest added successfully",
            data: result.rows[0],
        });
    } catch (error) {
        console.log("Error adding guest: ", error.message);
        console.log(`This error occured inside the addGuest function in guest.controller.js`);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while adding the guest",
            errmsg: error.message,
        });
        
    }
}

export {addGuest}