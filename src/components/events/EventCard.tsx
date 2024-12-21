import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IEvent } from '@/types/event';
import { multiFormatDateString } from '@/lib/utils';

interface EventCardProps {
  event: IEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="bg-dark-2 rounded-3xl border border-dark-4 p-5 lg:p-7 w-full">
      <div className="flex justify-between items-start gap-4">
        <div>
          <Link 
            to={`/events/${event.id}`}
            className="text-light-1 small-medium md:base-medium line-clamp-1 hover:underline"
          >
            {event.title}
          </Link>
          <div className="flex gap-2 items-center mt-2">
            <img 
              src="/assets/icons/calendar.svg" 
              alt="date" 
              className="w-1 h-1"
            />
            <p className="text-light-3 subtle-semibold">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <span className="text-light-3">•</span>
            <img 
              src={event.type === 'physical' ? "/assets/icons/location.svg" : "/assets/icons/video.svg"} 
              alt="location" 
              className="w-4 h-4"
            />
            <p className="text-light-3 subtle-semibold">{event.location}</p>
          </div>
        </div>
        <Button className="shad-button_primary">
          {event.type === 'physical' ? 'RSVP' : 'Join'}
        </Button>
      </div>

      <img
        src={event.imageUrl}
        alt={event.title}
        className="h-64 xs:h-[400px] lg:h-[450px] w-full rounded-[24px] object-cover my-5"
      />

      <p className="text-light-2 small-medium md:base-regular line-clamp-2">
        {event.description}
      </p>
      
      {!event.isApproved && (
        <div className="mt-4 flex items-center gap-2 text-yellow-500">
          <img src="/assets/icons/pending.svg" alt="pending" className="w-4 h-4" />
          <p className="tiny-medium">Pending Approval</p>
        </div>
      )}
    </div>
  );
};