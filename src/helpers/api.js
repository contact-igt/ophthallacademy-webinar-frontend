import axios from 'axios';

/**
 * Resolves the API base URL based on VITE_SERVER_PORT:
 *  - "local"  → VITE_LOCALHOST_API_URL  (ngrok / local tunnel)
 *  - otherwise → VITE_DEVELOPMENT_API_URL (staging server)
 */
const getBaseURL = () => {
    const port = (import.meta.env.VITE_SERVER_PORT || '').trim().toLowerCase();

    if (port === 'local') {
        return import.meta.env.VITE_LOCALHOST_API_URL;
    }

    return import.meta.env.VITE_DEVELOPMENT_API_URL;
};

const api = axios.create({
    baseURL: getBaseURL(),
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
