import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EventForm from '../components/EventForm';

const EditEvent = ({ events, addEvent }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  
  const event = events.find(e => e.id === parseInt(id));

 
  if (!event) return <div>Événement non trouvé</div>;

  
  const handleSubmit = (formData) => {
    const updatedEvent = { ...formData, id: parseInt(id) };
    addEvent(updatedEvent);
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <h1>Modifier l'événement</h1>
      <EventForm event={event} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditEvent;