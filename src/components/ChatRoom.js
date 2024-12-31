import React from "react";

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

    React.useEffect(() => {
        socket.on('chatMessage', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off('chatMessage');
        };
    }, [socket]);

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center p-4 bg-gray-100">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded p-2 mr-2"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                    onClick={sendMessage}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
};
export default ChatRoom;
