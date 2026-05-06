import { ADD_EVENT, DELETE_EVENT, } from '../actions/eventActions';

const initialState = {
  events: []
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const existingIndex = state.events.findIndex(e => e.id === action.payload.id);
      if (existingIndex >= 0) {
        const updatedEvents = [...state.events];
        updatedEvents[existingIndex] = action.payload;
        return {
          ...state,
          events: updatedEvents
        };
      } else {
        
        return {
          ...state,
          events: [...state.events, action.payload]
        };
      }

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(e => e.id !== action.payload)
      };

    

    default:
      return state;
  }
};

export default eventsReducer;
