import { getUser } from "../service/LoginService";
export const BASE_URL = "https://mpairavat.in/learningPortal";
// export const BASE_URL = "http://localhost:8080";

export const HEADERS = () => {
    const user = getUser();
    if (user && user.token) {
        return {
            headers: {
                Authorization: "Bearer "+user.token,
                // 'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': '*'
            }
        };
    } else {
        return {};  
    }
};