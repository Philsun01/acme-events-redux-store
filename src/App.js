import React from 'react';
import {Switch, Link, Route, HashRouter, NavLink} from 'react-router-dom';

import store, { fetchEvents } from './store';

const Home = () =><h1>Homepage</h1>;

const Nav = () =>{
  const links = [
    { text: 'Home', to: '/'},
    { text: 'Events', to: '/events'},
  ];
  return(
    <nav>
      {
        links.map(link =>
          <NavLink key = {link.text} to = {link.to}> {link.text}</NavLink>
        )
      }
      </nav>
  )
};

const Events = () =><h1>Eventspage</h1>;

class App extends React.Component{
  componentDidMount(){
    fetchEvents();
  }

  render(){
    return (
      <HashRouter>
        <h1>Acme Event Planner With Redux</h1>
        <Route component = {Nav} />
        <Route path = '/' component = {Home} exact/>
        <Route path = '/events' component = {Events} />
      </HashRouter>

    );
  }
}

export default App;
