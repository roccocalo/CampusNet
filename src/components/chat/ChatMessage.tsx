import React from 'react';
import { type Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isSender = message.sender === 'me';

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isSender
            ? 'bg-primary-500 text-light-1 rounded-br-none'
            : 'bg-dark-4 text-light-1 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <div className={`flex items-center gap-1 mt-1 text-xs ${
          isSender ? 'text-light-2' : 'text-light-3'
        }`}>
          <span>{message.timestamp}</span>
          {isSender && (
            <img 
              src={message.read ? "/assets/icons/checked.svg" : "/assets/icons/check.svg"}
              className="w-4 h-4"
              alt="read status"
            />
          )}
        </div>
      </div>
    </div>
  );
};