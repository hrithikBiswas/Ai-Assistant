function MessageBubble({ message, isLoading }) {
    const isUser = message.role === 'user';

    // const x = Object.keys(message).some((key) => message[key].role === 'user');
    // const con = Object.keys(message).map((key) => message[key]);

    // console.log(message);
    // console.log('con:', con);

    return (
        <div
            className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}
        >
            <div
                className={`flex gap-3 max-w-[85%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        isUser
                            ? 'bg-linear-to-br from-blue-500 to-purple-600'
                            : 'bg-linear-to-br from-emerald-500 to-teal-600'
                    }`}
                >
                    {isUser ? (
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-4 h-4 text-white"
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
                    )}
                </div>
                <div
                    className={`relative px-4 py-3 rounded-2xl ${
                        isUser
                            ? 'bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-br-md'
                            : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-bl-md shadow-sm'
                    }`}
                >
                    {isLoading && !isUser ? (
                        <div className="flex gap-1 items-center px-2 py-1">
                            <div
                                className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                                style={{ animationDelay: '0ms' }}
                            />
                            <div
                                className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                                style={{ animationDelay: '150ms' }}
                            />
                            <div
                                className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                                style={{ animationDelay: '300ms' }}
                            />
                        </div>
                    ) : (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                            {/* {con} */}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MessageBubble;
