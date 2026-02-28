/* eslint-disable no-useless-catch */
import axios from 'axios';

// 1. Resolve Base URL once at load time
const getBaseUrl = () => {
    const env = (import.meta.env.VITE_SERVER_PORT || 'production').trim().toLowerCase();

    const urls = {
        local: import.meta.env.VITE_LOCALHOST_API_URL,
        development: import.meta.env.VITE_DEVELOPMENT_API_URL,
        production: import.meta.env.VITE_PRODUCTION_API_URL
    };

    return urls[env] || urls.production || "https://api.invictusglobaltech.com/api/v1";
};

const BASE_URL = getBaseUrl();

/**
 * Standardized API Wrapper
 */
export const _axios = async (
    method = 'GET',
    url = '',
    body = null,
    contentType = 'application/json',
    params = null,
) => {
    try {
        const isFormData = body instanceof FormData;

        const config = {
            method,
            url: `${BASE_URL}${url}`,
            data: body,
            params,
            headers: {
                ...(isFormData ? {} : { 'Content-Type': contentType }),
            },
            timeout: 20000, // Slightly longer 20s timeout
        };

        const response = await axios(config);
        return response.data;
    } catch (err) {
        console.error(`[API Error] ${method} ${url}:`, err.response?.data?.message || err.message);
        throw err;
    }
};

export default _axios;
