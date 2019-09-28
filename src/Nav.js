import React from 'react';
import connect from './connect';
import { NavLink } from 'react-router-dom';


const Nav = ({ events }) => {
  const links = [
    { text: 'Home', to: '/' },
    { text: 'Events', to: '/events', count: events.length },
  ];
  return(
    <nav>
      {
        links.map(link =>
          <NavLink key = {link.text} to = {link.to}>
            {link.text} {link.count ? `(${link.count})` : ''}
          </NavLink>
        )
      }
      </nav>
  )
};

export default connect(Nav);
