import { createStore, combineReducers } from 'redux';
import axios from 'axios';

const eventsReducer = (state = [], action) => {
  if(action.type === 'SET_EVENT'){
    return action.events;
  } else if(action.type === 'ADD_EVENT') {
    return [...state, action.event]
  }
  return state;
};

const reducer = combineReducers({
  events: eventsReducer
});

const store = createStore(reducer);

const fetchEvents = async() => {
  const url = '/api/events';
  const events = (await axios.get(url)).data;
  //console.log(events);
  store.dispatch({ type: 'SET_EVENT', events });
};

const addEvent = async () => {
  store.dispatch({ event: (await axios.post('/api/events')).data, type: 'ADD_EVENT' });
};

export default store;
export { fetchEvents, addEvent };
