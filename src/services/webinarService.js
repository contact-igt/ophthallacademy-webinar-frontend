import _axios from '../helpers/api';

/**
 * Service to handle all Webinar related API requests.
 * Calls the _axios wrapper which dynamically resolves the base URL
 * based on VITE_SERVER_PORT (production / development / local).
 */
export const WebinarService = {

    // 1. Create Razorpay Order
    createOrder: async (orderData) => {
        return await _axios('POST', '/ophthall-webinar/create-order', orderData);
    },

    // 2. Register User after successful payment
    registerUser: async (registrationData) => {
        return await _axios('POST', '/ophthall-webinar/create', registrationData);
    },

    // 3. Check order payment status (used for QR code payment verification on modal dismiss)
    checkOrderStatus: async (orderId) => {
        return await _axios('GET', `/ophthall-webinar/order-status/${orderId}`);
    },
};
