import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventForm from '../components/EventForm';
import LoginModal from '../components/LoginModal';

const CreateEvent = ({ addEvent, events }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const event = id ? events.find(e => e.id === parseInt(id)) : null;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

    if (event) {
      const updatedEvent = { ...processedFormData, id: parseInt(id) };
      addEvent(updatedEvent);
    } else {
      const newEvent = { ...processedFormData, id: Date.now() };
      addEvent(newEvent);
    }
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
  return (
    <>
      <div style={{ filter: isLoginModalOpen ? 'blur(5px)' : 'none', transition: 'filter 0.3s ease', }}>
        <Header onLoginClick={() => setIsLoginModalOpen(true)} />
        <h1>{event ? 'Edit Event' : 'Create Event'}</h1>
        <EventForm event={event} onSubmit={handleSubmit} />
        <Footer />
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default CreateEvent;
