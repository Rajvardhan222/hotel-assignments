import ax from "../axios-instence";

export async function login(data) {
    try {
        let response = await ax.post("/auth/login", data);
        return response;
    } catch (error) {
        console.log("Error logging in: ", error.message);
        return error.response;
    }
    
}

export async function isLoggedIn() {
    try {
        let response = await ax.get("/auth/isloggedin");
        return response;
    } catch (error) {
        console.log("Error checking if logged in: ", error.message);
    }
    
}