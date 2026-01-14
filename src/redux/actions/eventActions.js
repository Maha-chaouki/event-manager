// Action Types
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_EVENTS = 'SET_EVENTS';

// Action Creators
export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: event
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  payload: id
});

export const setEvents = (events) => ({
  type: SET_EVENTS,
  payload: events
});
