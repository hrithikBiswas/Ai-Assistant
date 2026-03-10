'use client';

import MessageBubble from '@/components/MessageBubble';
import useChat from '@/hooks/useChat';
import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const { messages, setMessages, sendPrompt } = useChat();

    const displayMessages = messages.reduce((acc, msg) => {
        acc.push(...Object.values(msg));
        return acc;
    }, []);

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

        await sendPrompt(input);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                                    AI Assistant
                                </h1>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="h-[60vh] min-h-100 overflow-y-auto px-6 py-4 bg-zinc-50/50 dark:bg-zinc-950/30">
                        {displayMessages.length === 0 && (
                            <div className="flex flex-col items-center gap-3 mt-10">
                                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Start the conversation!
                                </p>
                            </div>
                        )}
                        {displayMessages.map((msg, i) => (
                            <MessageBubble
                                key={i}
                                message={msg}
                                isLoading={
                                    isLoading &&
                                    i === displayMessages.length - 1 &&
                                    msg.role === 'assistant' &&
                                    !msg.content
                                }
                            />
                        ))}
                        {isLoading &&
                            displayMessages[displayMessages.length - 1]
                                ?.role === 'user' && (
                                <MessageBubble
                                    message={{ role: 'assistant', content: '' }}
                                    isLoading={true}
                                />
                            )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                        <form
                            onSubmit={handleSubmit}
                            className="flex gap-3 items-end"
                        >
                            <div className="flex-1 relative">
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Type your message..."
                                    rows={1}
                                    className="w-full px-4 py-3 pr-12 bg-zinc-100 dark:bg-zinc-800 border-0 rounded-2xl text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
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
                                        className="w-5 h-5"
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
                        <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-3">
                            AI can make mistakes. Please verify important
                            information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
