import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './UrlUtils';
import axios from 'axios';
import { CircularProgress, Box, Typography, Paper } from '@mui/material'; // Using Material UI for styling

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
                });
        }
    }, [navigate]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f4f7',
                paddingX: '1rem', // Ensures a little padding on the sides in mobile view
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    width: { xs: '100%', sm: '30rem' }, // 100% width for small screens, 30rem for larger screens
                    maxWidth: '30rem', // Limits the width to 30rem for larger screens
                }}
            >
                <Typography variant="h4" component="div">
                    Authenticating...
                </Typography>
                <CircularProgress sx={{ color: 'lightgreen' }} />
                <Typography variant="body2" color="textSecondary">
                    Please wait while we log you in.
                </Typography>
            </Paper>
        </Box>
    );
};

export default OAuthRedirectHandler;
