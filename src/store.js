import { createStore, combineReducers } from 'redux';
import axios from 'axios';

const eventsReducer = (state = [], action) => {
  if(action.type === 'SET_EVENT'){
    return action.events;
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

export default store;
export { fetchEvents };
