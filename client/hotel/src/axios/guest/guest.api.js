import ax from "../axios-instence";

export async function saveGuest(data) {
    try {
        
        let response = await ax.post("/guest/add", data);
        return response
    } catch (error) {
        console.log("Error saving guest: ", error.message);
        return error.response;
    }
}

export async function getHotelId(name) {
    try {
        let response = await ax.get(`/guest/get-hotel-by-name/${name}`);
        return response;
    } catch (error) {
        console.log("Error getting hotel id: ", error.message);
        return error.response;
    }
}