import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { addEvent, deleteEvent } from './redux/actions/eventActions';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './pages/EventDetails';

function App() {
  const events = useSelector(state => state.events.events);
  const dispatch = useDispatch();

  

  const handleAddEvent = (eventData) => {
    dispatch(addEvent(eventData));
  };

  const handleDeleteEvent = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home events={events} />} />
        <Route path="/create-event" element={<CreateEvent addEvent={handleAddEvent} events={events} />} />
        <Route path="/create-event/:id" element={<CreateEvent addEvent={handleAddEvent} events={events} />} />
        <Route path="/event/:id" element={<EventDetails events={events} deleteEvent={handleDeleteEvent} />} />
      </Routes>
    </Router>
  );
}

export default App;
