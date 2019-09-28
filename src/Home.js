import React from 'react';
import connect from './connect';

const Home = ({ events }) => {
  return (
    <h1>You got {events.length} events!</h1>
  );
};

export default connect(Home);
