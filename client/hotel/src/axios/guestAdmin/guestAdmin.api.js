import ax from "../axios-instence";

export async function getAllGuests() {
    try {
        let response = await ax.get('/guestAdmin/get-guest-list');
        return response;
    } catch (error) {
        console.log('Error getting all guests: ', error.message);
        return error.response;
    }
}

export async function updateGuest(data,id) {
    try {
        let response = await ax.put(`/guestAdmin/update-guest/${id}`, data);
        return response;
    } catch (error) {
        console.log('Error updating guest: ', error.message);
        return error.response;
    }
}

export async function getGuestById(id) {
    try {
        let response = await ax.get(`/guestAdmin/get-guest/${id}`);
        return response;
    } catch (error) {
        console.log('Error getting guest by id: ', error.message);
        return error.response;
    }
    
}