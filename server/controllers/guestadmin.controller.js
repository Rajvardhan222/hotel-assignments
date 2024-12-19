import db from "../config/db.js";

async function getListOfGuests(req,res) {
    try {
        let user = req.user;

        

        let getGuestForEveryHoteil = `select g.name,g.email,g.phone,g.purposeOfVisit,g.stayFrom,g.stayTo,g.idproofno from hotel_guest hg join guests g on hg.guest = g.id 
        join hotels h on hg.hotel = h.id where h.userid = $1 and g.stayTo >= $2`;

       
        let date = new Date();
       
        let todayDate = date.toISOString().split('T')[0];
        let result = await db.query(getGuestForEveryHoteil, [user.id, todayDate]);

        return res.status(201).json({
            status: "success",
            message: "Guest list fetched successfully",
            data: result.rows,
        })
        
    } catch (error) {
        console.log("Error getting guests: ", error.message);
        console.log(`This error occured inside the getListOfGuests function in guestadmin.controller.js`);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while getting the guests",
            errmsg: error.message,
        });
        
    }
}

async function updateGuestDetails(req, res) {
    try {
        const { id } = req.params;
        const { name, email, stayFrom, stayTo } = req.body;
        let user = req.user;

        if (!name || !email || !stayFrom || !stayTo) {
            return res.status(400).json({
                status: "error",
                message: "Please provide all the details",
            });
        }

        //does this belong to your hoteil

        let checkHotel = `SELECT * FROM hotel_guest hg JOIN hotels h ON hg.hotel = h.id WHERE hg.guest = $1 AND h.userid = $2`;

        let checkHotelResult = await db.query(checkHotel, [id, user.id]);

        if (checkHotelResult.rows.length == 0) {
            return res.status(403).json({
                status: "error",
                message: "You are not authorized to update this guest details, as this guest does not belong to your hotel. Do not roam around in other people's hotels"
            });
        }

        let query = `UPDATE guests SET name = $1, email = $2, stayFrom = $3, stayTo = $4 WHERE id = $5 RETURNING *`;
        let values = [name, email, stayFrom, stayTo, id];

        let result = await db.query(query, values);

        if (result.rows.length == 0) {
            return res.status(404).json({
                status: "error",
                message: "Guest not found",
            });
        }

        return res.status(200).json({
            status: "success",
            message: "Guest details updated successfully",
            data: result.rows[0],
        });

    } catch (error) {
        console.log("Error updating guest details: ", error.message);
        console.log(`This error occurred inside the updateGuestDetails function in guestadmin.controller.js`);
        res.status(500).json({
            status: "error",
            message: "Something went wrong while updating the guest details",
            errmsg: error.message,
        });
    }
}

export { getListOfGuests, updateGuestDetails }