'use client';
const { createContext, useState } = require('react');

export const chatAppContext = createContext(null);

const ChatAppProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        // {
        //     role: 'user',
        //     content: 'Hello',
        // },
        // {
        //     role: 'assistant',
        //     content: "Hello! I'm your AI assistant. How can I help you today?",
        // },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const sendPrompt = async (prompt) => {
        try {
            setIsLoading(true);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'user',
                    content: prompt,
                },
            ]);
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

            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content:
                        data.choices?.[0]?.message?.content || 'No response',
                },
            ]);
        } catch (error) {
            console.log('Error sending prompt:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <chatAppContext.Provider
            value={{ messages, setMessages, sendPrompt, isLoading }}
        >
            {children}
        </chatAppContext.Provider>
    );
};

export default ChatAppProvider;
