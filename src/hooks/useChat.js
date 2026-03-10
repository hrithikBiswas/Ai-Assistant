import { chatAppContext } from '@/context/ChatAppContext';
import { useContext } from 'react';

const useChat = () => {
    const context = useContext(chatAppContext);

    if (!context) {
        throw new Error('useChat must be used within a ChatAppProvider');
    }

    return context;
};

export default useChat;
