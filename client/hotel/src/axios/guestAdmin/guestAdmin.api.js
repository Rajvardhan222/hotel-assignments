import ax from "../axios-instence";

export async function getAllGuests() {
    try {
        let response = await ax.get('/guestAdmin/get-guest-list');
        return response;
    } catch (error) {
        console.log('Error getting all guests: ', error.message);
    }
}

export async function updateGuest(data) {
    try {
        let response = await ax.put('/guestAdmin/update-guest', data);
        return response;
    } catch (error) {
        console.log('Error updating guest: ', error.message);
    }
}