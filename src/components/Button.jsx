'use client';
import React from 'react';

const Button = ({ text }) => {
    const handleClick = async () => {
        console.log('Button clicked');

        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Do you know the capital of Australia?',
            }),
        });

        const data = await response.json();
        console.log(
            'Response from API:',
            data.choices?.[0]?.message?.content || 'No response',
        );
    };
    return (
        <div>
            <button
                className="bg-purple-600 rounded-md px-4 py-2 mt-4 ml-10 hover:bg-purple-700 transition duration-300 cursor-pointer"
                onClick={handleClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
