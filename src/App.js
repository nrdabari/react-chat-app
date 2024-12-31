// src/App.js
import React from 'react';
import io from 'socket.io-client';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';

const socket = io('http://localhost:8080');

const App = () => {
    const [username, setUsername] = React.useState('');

    return (
        <div>
            {!username ? (
                <Login onLogin={setUsername} />
            ) : (
                <ChatRoom username={username} socket={socket} />
            )}
        </div>
    );
};

export default App;
