import { NextResponse } from 'next/server';

export async function POST(req) {
    const { message } = await req.json();
    console.log('log from server:', message);

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'deepseek/deepseek-chat-v3-0324',
            messages: [
                {
                    role: 'user',
                    content: message,
                },
            ],
        }),
    });

    const data = await res.json();
    return NextResponse.json(data);
}
