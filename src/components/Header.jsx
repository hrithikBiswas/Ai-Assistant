import React from 'react';

const Header = () => {
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
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
    );
};

export default Header;
