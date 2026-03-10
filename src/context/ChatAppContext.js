'use client';
const { createContext, useState, useEffect } = require('react');

export const chatAppContext = createContext(null);

const ChatAppProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        // {
        //     assistant: {
        //         role: 'assistant',
        //         content:
        //             "Hello! I'm your AI assistant. How can I help you today?",
        //     },
        //     user: {
        //         role: 'user',
        //         content: 'Hello',
        //     },
        // },
    ]);

    const sendPrompt = async (prompt) => {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: prompt,
            }),
        });

        const data = await response.json();
        console.log(
            'Response from API:',
            data.choices?.[0]?.message?.content || 'No response',
        );

        setMessages((prev) => [
            ...prev,
            {
                user: {
                    role: 'user',
                    content: prompt,
                },
                assistant: {
                    role: 'assistant',
                    content:
                        data.choices?.[0]?.message?.content || 'No response',
                },
            },
        ]);
    };

    console.log(messages);

    return (
        <chatAppContext.Provider value={{ messages, setMessages, sendPrompt }}>
            {children}
        </chatAppContext.Provider>
    );
};

export default ChatAppProvider;
