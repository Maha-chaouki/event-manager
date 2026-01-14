import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EventForm from '../components/EventForm';

const EditEvent = ({ events, addEvent }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  const handleSubmit = async (formData) => {
    let processedFormData = { ...formData };

    // Handle image file conversion
    if (formData.image && formData.image instanceof File) {
      try {
        const imageUrl = await convertFileToDataUrl(formData.image);
        processedFormData.image = imageUrl;
      } catch (error) {
        console.error('Error converting image file:', error);
        // Fallback: use object URL if data URL fails
        processedFormData.image = URL.createObjectURL(formData.image);
      }
    }

    const updatedEvent = { ...processedFormData, id: parseInt(id) };
    addEvent(updatedEvent);
    navigate('/');
  };

  const convertFileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  if (!event) return <div>Événement non trouvé</div>;

  return (
    <div>
      <Navbar />
      <h1>Modifier</h1>
      <EventForm event={event} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditEvent;
