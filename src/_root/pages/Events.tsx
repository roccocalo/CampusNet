import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { EventList } from '@/components/events/EventList';
import { MOCK_EVENTS } from '@/types/event';
import { useUserContext } from '@/context/AuthContext';

const Events = () => {
  const { user } = useUserContext();
  const [filter, setFilter] = useState<'all' | 'physical' | 'virtual'>('all');

  const filteredEvents = MOCK_EVENTS.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/events.svg"
            width={36}
            height={36}
            alt="events"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Events</h2>
        </div>

        <div className="flex gap-3 bg-dark-3 px-4 py-2 rounded-xl w-full max-w-5xl mt-8">
          <Button 
            onClick={() => setFilter('all')}
            className={`${filter === 'all' ? 'bg-primary-500' : 'bg-dark-4'} px-4 py-2 rounded-lg`}
          >
            All Events
          </Button>
          <Button 
            onClick={() => setFilter('physical')}
            className={`${filter === 'physical' ? 'bg-primary-500' : 'bg-dark-4'} px-4 py-2 rounded-lg`}
          >
            In Person
          </Button>
          <Button 
            onClick={() => setFilter('virtual')}
            className={`${filter === 'virtual' ? 'bg-primary-500' : 'bg-dark-4'} px-4 py-2 rounded-lg`}
          >
            Virtual
          </Button>
        </div>

        <div className="flex justify-end w-full max-w-5xl mt-8">
            <Button className="shad-button_primary">
              Create Event
            </Button>
        </div>
        

        <div className="flex-between w-full max-w-5xl mt-16 mb-7">
          <h3 className="body-bold md:h3-bold">Upcoming Events</h3>
        </div>

        <EventList events={filteredEvents} />
      </div>
    </div>
  );
};

export default Events;