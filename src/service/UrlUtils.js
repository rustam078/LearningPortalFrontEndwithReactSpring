import { getUser } from "../service/LoginService";
export const BASE_URL = "https://mpairavat.in/learningPortal";
// export const BASE_URL = "https://apps.voicera-analytics.com/VoiceraTestApp";
// export const BASE_URL = "https://mpairavat.in/learningPortal/VoiceraTestApp";

export const HEADERS = () => {
    const user = getUser();
    if (user && user.token) {
        // alert(JSON.stringify(user.token))
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