import React, { useEffect } from "react";

// src/components/ChatRoom.js
const ChatRoom = ({ username, socket }) => {
    const [messages, setMessages] = React.useState([]);
    const [newMessage, setNewMessage] = React.useState('');

    const sendMessage = () => {
        if (newMessage.trim()) {
            socket.emit('chatMessage', { user: username, text: newMessage });
            setNewMessage('');
        }
    };

    useEffect(() => {
        socket.on('chatMessage', (message) => {
            console.log(`User connected: ${socket.id}`);
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off('chatMessage');
        };
    }, [socket]);

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-blue-100 to-purple-200">
            {/* Header */}
            <div className="bg-indigo-600 text-white p-4 flex items-center justify-between shadow-md">
                <h1 className="text-xl font-bold">Chat Room</h1>
                <span className="text-sm">{username}</span>
            </div>

            {/* Messages Section */}
            <div className="flex-1 overflow-y-auto p-4">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-10">
                        No messages yet. Start the conversation!
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-3 rounded-lg shadow ${
                                msg.user === username
                                    ? "bg-indigo-500 text-white self-end"
                                    : "bg-white border border-gray-300"
                            }`}
                        >
                            <strong>{msg.user}:</strong> {msg.text}
                        </div>
                    ))
                )}
            </div>

            {/* Input Section */}
            <div className="flex items-center p-4 bg-white shadow-md">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg p-3 mr-2 focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                    onClick={sendMessage}
                    className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 shadow-lg transition duration-200"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
