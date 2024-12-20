import ax from "../axios-instence";

export async function saveGuest(data) {
    try {
        
        let response = await ax.post("/guest/add", data);
        return response
    } catch (error) {
        console.log("Error saving guest: ", error.message);
        
    }
}