import React from 'react';
import connect from './connect';
import { addEvent, deleteEvent } from './store';

const Events = ({ events }) => {
  return (
    <div>
      <button onClick={ addEvent }>Create</button>
      <ul>
        {
          events.map(event => <li key={event.id} onClick={ () => deleteEvent(event.id) }>{event.name}</li>)
        }
      </ul>
    </div>
  );
};

export default connect(Events);
