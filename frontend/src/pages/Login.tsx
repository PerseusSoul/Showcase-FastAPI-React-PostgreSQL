import React, { useState } from 'react'
import { loginAction } from '../services/authService';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        // Validation

        // Call Action
        try {
            const response = await loginAction(email, password);
            console.log(response);
        } catch (error: any) {
            setError(error.message)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100 h-screen'>
            <h1 className='text-2xl font-semibold mb-4 text-red-300'>Login</h1>
            <form className='bg-white p-6 rounded shadow-md'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    />
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Log In
                    </button>
            </form>
        </div>
    );
}

export default Login;