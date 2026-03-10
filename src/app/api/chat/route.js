import { NextResponse } from 'next/server';

export async function POST(req) {
    const { message } = await req.json();

    try {
        const res = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'deepseek/deepseek-chat-v3-0324',
                    // model: 'anthropic/claude-3.5-haiku',
                    // models: [
                    //     'anthropic/claude-opus-4.6',
                    //     'deepseek/deepseek-chat-v3-0324',
                    // ],
                    messages: [
                        {
                            role: 'user',
                            content: message,
                        },
                    ],
                }),
            },
        );

        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        return NextResponse.json(
            { error: 'Failed to fetch chat completion' },
            { status: 500 },
        );
    }
}
