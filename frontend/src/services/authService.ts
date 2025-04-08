import axios from 'axios';

interface LoginResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export const loginAction = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post('url', {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login Failed');
    }
}