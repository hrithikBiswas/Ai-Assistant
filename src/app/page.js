import Button from '@/components/Button';
import ChatBot from '@/components/ChatBot';

export default async function Home() {
    // const output = await fetch(
    //     'https://openrouter.ai/api/v1/chat/completions',
    //     {
    //         method: 'POST',
    //         headers: {
    //             Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             model: 'deepseek/deepseek-chat-v3-0324',
    //             messages: [
    //                 {
    //                     role: 'user',
    //                     content: 'Hello, how are you?',
    //                 },
    //             ],
    //         }),
    //     },
    // );

    // const data = await output.json();
    // console.log(data);
    // const message = data.choices?.[0]?.message?.content || 'No response';

    // return <div>{message}</div>;

    // return <ChatBot />;
    return (
        <div>
            <ChatBot />
        </div>
    );
}
