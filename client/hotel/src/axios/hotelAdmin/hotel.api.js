import ax from "../axios-instence";

export async function addHotel(hotel) {
    try {
        let response = await ax.post("/hoteladmin/add", hotel);
        return response;
    } catch (error) {
        console.log("Error adding hotel: ", error.message);
    }
}

export async function getHotels() {
    try {
        let response = await ax.get("/hoteladmin/list");
        return response;
    } catch (error) {
        console.log("Error getting hotels: ", error.message);
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