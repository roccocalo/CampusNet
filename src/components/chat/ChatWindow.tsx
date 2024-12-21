import React, { useState } from 'react';
import { ChatList } from './ChatList';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { MOCK_CHATS, MOCK_MESSAGES, type Message, type ChatPreview } from '@/types/chat';

export const ChatWindow = () => {
  const [selectedChat, setSelectedChat] = useState<ChatPreview | null>(null);
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };

    setMessages(prev => [...prev, newMessage]);
    
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, read: true } : msg
        )
      );
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-dark-2 rounded-lg overflow-hidden">
      <div className="w-80 border-r border-dark-4 bg-dark-3">
        <ChatList 
          chats={MOCK_CHATS} 
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <ChatHeader chat={selectedChat} />
            <MessageList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-light-4">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
};
