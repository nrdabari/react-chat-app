// src/components/Login.js
import React from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = React.useState('');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
                    Welcome to <span className="text-indigo-500">ChatApp</span>
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Enter your username to join the chat
                </p>
                <input
                    type="text"
                    className="border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg p-3 w-full mb-6 text-gray-700 shadow-sm"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    onClick={() => username.trim() && onLogin(username)}
                    className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-indigo-600 shadow-md transition duration-300"
                >
                    Login
                </button>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Don’t have an account? <span className="text-indigo-500 font-medium">Sign up now</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
