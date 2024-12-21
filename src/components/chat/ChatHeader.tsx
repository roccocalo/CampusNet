import React from 'react';
import { Button } from "@/components/ui/button";
import { type ChatPreview } from '@/types/chat';

interface ChatHeaderProps {
  chat: ChatPreview;
}

export const ChatHeader = ({ chat }: ChatHeaderProps) => {
  return (
    <div className="px-4 py-3 border-b border-dark-4 flex items-center justify-between bg-dark-2">
      <div className="flex items-center space-x-3">
        <img
          src={chat.user.avatar}
          alt={chat.user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-light-1 font-medium">{chat.user.name}</h3>
          <p className="text-sm text-light-3">
            {chat.user.online ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button type="button" className="shad-button_ghost">
          <img src="/assets/icons/phone.svg" alt="call" className="w-5 h-5" />
        </Button>
        <Button type="button" className="shad-button_ghost">
          <img src="/assets/icons/video.svg" alt="video" className="w-5 h-5" />
        </Button>
        <Button type="button" className="shad-button_ghost">
          <img src="/assets/icons/more.svg" alt="more" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};