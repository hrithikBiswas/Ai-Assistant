'use client';

import { useRef } from 'react';
import MessageBubble from '@/components/MessageBubble';
import useChat from '@/hooks/useChat';
import PromptForm from './PromptForm';

export default function ChatBot() {
    const messagesEndRef = useRef(null);
    const { messages, isLoading } = useChat();

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
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col justify-center items-center  gap-3">
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
                        {messages.map((msg, i) => (
                            <MessageBubble
                                key={i}
                                message={msg}
                                isLoading={
                                    isLoading &&
                                    i === messages.length - 1 &&
                                    msg.role === 'assistant' &&
                                    !msg.content
                                }
                            />
                        ))}
                        {isLoading &&
                            messages[messages.length - 1]?.role === 'user' && (
                                <MessageBubble
                                    message={{ role: 'assistant', content: '' }}
                                    isLoading={true}
                                />
                            )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="px-6 py-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                        <PromptForm />
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
