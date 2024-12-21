import React from 'react';
import { type ChatPreview } from '@/types/chat';

interface ChatListProps {
  chats: ChatPreview[];
  selectedChat: ChatPreview | null;
  onSelectChat: (chat: ChatPreview) => void;
}

export const ChatList = ({ chats, selectedChat, onSelectChat }: ChatListProps) => {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="p-4 space-y-2">
        <h2 className="text-light-1 font-bold text-lg mb-4">Messages</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`p-3 cursor-pointer rounded-lg transition-colors hover:bg-dark-4 
              ${selectedChat?.id === chat.id ? 'bg-dark-4' : ''}`}
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={chat.user.avatar}
                  alt={chat.user.name}
                  className="w-12 h-12 rounded-full"
                />
                {chat.user.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary-500 rounded-full border-2 border-dark-1" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-light-1 text-sm font-medium truncate">
                    {chat.user.name}
                  </h3>
                  <span className="text-light-3 text-xs">{chat.lastMessage.timestamp}</span>
                </div>
                <p className="text-light-2 text-sm truncate">
                  {chat.lastMessage.text}
                </p>
              </div>
              {chat.lastMessage.unread && (
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};