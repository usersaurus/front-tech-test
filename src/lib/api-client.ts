import Axios from 'axios';

export const api = Axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error(error);
        return Promise.reject(error);
    }
)