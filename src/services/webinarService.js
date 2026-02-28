import _axios from '../helpers/api';


export const WebinarService = {

    // 1. Create Razorpay Order
    createOrder: async (orderData) => {
        return await _axios('POST', '/ophthall-webinar/create-order', orderData);
    },

    // 2. Register User after successful payment
    registerUser: async (registrationData) => {
        return await _axios('POST', '/ophthall-webinar/create', registrationData);
    },
};
