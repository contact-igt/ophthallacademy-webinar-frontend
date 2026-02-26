import axios from 'axios';

/**
 * Resolves the API base URL based on VITE_SERVER_PORT:
 *  - "local"  → VITE_LOCALHOST_API_URL  (ngrok / local tunnel)
 *  - otherwise → VITE_DEVELOPMENT_API_URL (staging server)
 */
const getBaseURL = () => {
    const port = (import.meta.env.VITE_SERVER_PORT || '').trim().toLowerCase();

    if (port === 'local') {
        return import.meta.env.VITE_LOCALHOST_API_URL || "/api/v1";
    }

    return import.meta.env.VITE_DEVELOPMENT_API_URL || "https://stageapi.invictusglobaltech.com/api/v1";
};

const baseURL = getBaseURL();
console.log('[API] Base URL resolved to:', baseURL);

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});



// Debug interceptors — remove after testing
api.interceptors.request.use((config) => {
    console.log(`[API] → ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, config.data);
    return config;
}, (error) => {
    console.error('[API] Request error:', error);
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    console.log(`[API] ← ${response.status}`, response.data);
    return response;
}, (error) => {
    console.error('[API] Response error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
});

export default api;
