import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventForm from '../components/EventForm';

const CreateEvent = ({ addEvent, events }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const event = id ? events.find(e => e.id === parseInt(id)) : null;

  const handleSubmit = (formData) => {
    if (event) {
      
      addEvent({ ...formData, id: parseInt(id) });
    } else {
      
      addEvent({ ...formData, id: Date.now() });
    }

    navigate('/');
  };

  return (
    <>
      <Header />
      <h1>{event ? 'Edit Event' : 'Create Event'}</h1>
      <EventForm event={event} onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default CreateEvent;