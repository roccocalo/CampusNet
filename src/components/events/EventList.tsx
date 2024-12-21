import React from 'react';
import { EventCard } from './EventCard';
import { IEvent } from '@/types/event';

interface EventListProps {
  events: IEvent[];
  showLoader?: boolean;
}

export const EventList = ({ events, showLoader = false }: EventListProps) => {
  return (
    <ul className="flex flex-col flex-1 gap-9 w-full">
      {events.map((event) => (
        <li key={event.id} className="flex justify-center w-full">
          <EventCard event={event} />
        </li>
      ))}
    </ul>
  );
};