import ax from "../axios-instence";

export async function addHotel(hotel) {
    try {
        let response = await ax.post("/hoteladmin/add", hotel,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        console.log("Error adding hotel: ", error.message);
        return error.response;
    }
}

export async function getHotels() {
    try {
        let response = await ax.get("/hoteladmin/list");
        return response;
    } catch (error) {
        console.log("Error getting hotels: ", error.message);
        return error.response;
    }
}

export async function getQRCode(hotelId) {
    try {
        let response = await ax.get(`/hoteladmin/qr/${hotelId}`);
        return response;
    } catch (error) {
        console.log("Error getting QR code: ", error.message);
        
    }
}