import React from 'react';
import connect from './connect';
import { addEvent } from './store';

const Events = ({ events }) => {
  return (
    <div>
      <button onClick={ addEvent }>Create</button>
      <ul>
        {
          events.map(event => <li key={event.id}>{event.name}</li>)
        }
      </ul>
    </div>
  );
};

export default connect(Events);
