import React from 'react';
import connect from './connect';

const Events = ({ events }) => {
  return (
    <ul>
      {
        events.map(event => <li key={event.id}>{event.name}</li>)
      }
    </ul>
  );
};

export default connect(Events);
