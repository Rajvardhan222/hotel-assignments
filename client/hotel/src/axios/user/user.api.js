import ax from "../axios-instence";

export async function login(data) {
    try {
        let response = await ax.post("/auth/login", data);
        return response;
    } catch (error) {
        console.log("Error logging in: ", error.message);
    }
    
}