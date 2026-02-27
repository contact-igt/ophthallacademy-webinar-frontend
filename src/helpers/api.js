/* eslint-disable no-useless-catch */
import axios from 'axios';

/**
 * Enhanced API Wrapper (Admin Page Style)
 * Standardizes headers, dynamically resolves the base URL, and unifies error handling.
 */
export const _axios = async (
    method = 'GET',
    url = '',
    body = null,
    contentType = 'application/json',
    params = null,
) => {
    // 1. Resolve Dynamic API URL
    const port = (import.meta.env.VITE_SERVER_PORT || '').trim().toLowerCase();

    // Default fallback URLs based on environment: Default to PRODUCTION for safety
    let APIURL;

    if (port === 'local') {
        APIURL = import.meta.env.VITE_LOCALHOST_API_URL || "http://localhost:8000/api/v1";
    } else if (port === 'development') {
        APIURL = import.meta.env.VITE_DEVELOPMENT_API_URL || "https://stageapi.invictusglobaltech.com/api/v1";
    } else {
        // Fallback or explicit 'production'
        APIURL = import.meta.env.VITE_PRODUCTION_API_URL || "https://api.invictusglobaltech.com/api/v1";
    }

    const endpoint = `${APIURL}${url}`;

    // 2. Token strategy setup (Not used in public frontend currently, but structured)
    const token = null;

    // 3. Body formatting correctly handling form data
    const isFormData = body instanceof FormData;

    try {
        const res = await axios({
            headers: {
                ...(isFormData ? {} : { 'Content-Type': contentType }),
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            method: method,
            url: endpoint,
            data: body,
            params: params,
            timeout: 15000, // 15s timeout to prevent hanging forever
        });
        return res.data;
    } catch (err) {
        // Log basic error info even in production to help debugging "stuck" issues
        console.error(`[API Error] ${method} ${url}:`, err.message || 'Request failed');
        throw err;
    }
};

export default _axios;
