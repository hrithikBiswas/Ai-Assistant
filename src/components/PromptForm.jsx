'use client';

import { useState, useRef, useEffect } from 'react';
import useChat from '@/hooks/useChat';

const PromptForm = () => {
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const { messages, sendPrompt, isLoading } = useChat();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        setInput('');
        try {
            await sendPrompt(input);
        } catch (error) {
            console.log('Pormpt sending error:', error.message);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 items-center">
            <div className="flex-1 relative">
                <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-3 pr-12 bg-slate-100 dark:bg-slate-800 border-0 rounded-2xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    disabled={isLoading}
                    style={{
                        maxHeight: '120px',
                        minHeight: '48px',
                    }}
                />
            </div>
            <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 cursor-pointer flex items-center justify-center bg-linear-to-br from-emerald-500 to-teal-600 text-white rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
            >
                {isLoading ? (
                    <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : (
                    <svg
                        className="w-5 h-5 rotate-90"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                )}
            </button>
        </form>
    );
};

export default PromptForm;
