import React, { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { type Message } from '@/types/chat';

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
      <div className="space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};