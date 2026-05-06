
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';



   export const addEvent = (event) => ({
  type: ADD_EVENT,
      payload: event
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
     payload: id
});
