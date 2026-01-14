import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import heroImagesReducer from './heroImagesReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  heroImages: heroImagesReducer,
});

export default rootReducer;
