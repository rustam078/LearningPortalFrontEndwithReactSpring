import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './UrlUtils';
import axios from 'axios';
const OAuthRedirectHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Parse the URL to get the token
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get("code");

        if (email) {
            axios.get(`${BASE_URL}/userdtls/${email}`)
                .then(response => {
                  console.log("response.data ===========================>> ", response.data);
                  sessionStorage.setItem("user", JSON.stringify(response.data));
                  navigate('/dashboard');
                })
                .catch(error => {
                    console.error("Error occurred while fetching user data:", error.message);
                })
        }
    }, [navigate]);

    return <div>Loading...</div>; // Loading state
};

export default OAuthRedirectHandler;
