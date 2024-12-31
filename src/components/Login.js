import React from "react";

// src/components/Login.js
const Login = ({ onLogin }) => {
    const [username, setUsername] = React.useState('');

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Welcome to ChatApp</h2>
                <input
                    type="text"
                    className="border border-gray-300 rounded p-2 w-full mb-4"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    onClick={() => username.trim() && onLogin(username)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                >
                    Login
                </button>
            </div>
        </div>
    );
};
export default Login;
