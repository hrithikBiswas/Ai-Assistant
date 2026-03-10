# AI Assistant

A modern Ai-Assitant application built with Next.js, featuring a clean UI and powered by DeepSeek AI.

## Features

- Real-time chat interface with AI assistant
- Markdown support for rich text responses
- Responsive design with dark mode support
- Auto-scroll to latest messages
- Typing indicator while waiting for responses
- Modern UI with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16.1.6
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4
- **AI Model:** DeepSeek (via OpenRouter API)
- **Markdown:** react-markdown

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:
   Create a `.env.local` file in the root directory and add your OpenRouter API key:

```env
DEEPSEEK_API_KEY=your_api_key_here
```

Get your free API key at [openrouter.ai](https://openrouter.ai).

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.js    # API endpoint for chat
│   ├── layout.js             # Root layout with providers
│   ├── page.js               # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── ChatBot.jsx           # Main chat container
│   ├── Header.jsx            # App header
│   ├── MessageBubble.jsx     # Message display
│   ├── PromptForm.jsx        # Input form
│   └── TypingIndicator.jsx   # Loading animation
├── context/
│   └── ChatAppContext.js     # State management
└── hooks/
    └── useChat.js            # Chat hook
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
