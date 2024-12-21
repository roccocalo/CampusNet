import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="border-t border-dark-4 px-4 py-3 flex items-center space-x-3 bg-dark-2"
    >
      <Button 
        type="button"
        className="shad-button_ghost"
      >
        <img src="/assets/icons/file.svg" alt="attach" className="w-5 h-5" />
      </Button>
      <Button 
        type="button"
        className="shad-button_ghost"
      >
        <img src="/assets/icons/smile.svg" alt="emoji" className="w-5 h-5" />
      </Button>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="shad-input flex-1"
      />
      <Button 
        type="submit" 
        className="shad-button_primary"
        disabled={!message.trim()}
      >
        <img src="/assets/icons/send.svg" alt="send" className="w-5 h-5" />
      </Button>
    </form>
  );
};