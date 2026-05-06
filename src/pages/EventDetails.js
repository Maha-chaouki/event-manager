import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventDetails = ({ deleteEvent }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const events = useSelector(state => state.events.events);
  const event = events.find(e => e.id === parseInt(id));

  const handleDelete = () => {
    deleteEvent(parseInt(id));
    navigate('/');
  };

  if (!event) return <div></div>;

  return (
    <>
      <div>
        
        <Header />

        
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '1rem' }}>{event.title}</h1>

          <p style={{ margin: '0.5rem 0' }}>{event.date}</p>
          <p style={{ margin: '0.5rem 0' }}>{event.time}</p>
          <p style={{ margin: '0.5rem 0' }}>{event.location}</p>
          <p style={{ margin: '0.5rem 0' }}>{event.price}</p>
          <p style={{ margin: '0.5rem 0' }}>{event.description}</p>
          <p style={{ margin: '0.5rem 0' }}>Age 14+</p>

          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={() => navigate(`/create-event/${event.id}`)}
              style={{
                padding: '0.5rem 1rem',
                marginRight: '1rem',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Modifier
            </button>

            <button
              onClick={handleDelete}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#f44336',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Supprimer
            </button>

            <button
              style={{
                padding: '0.75rem 1.5rem',
                marginLeft: '1rem',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Réserver des billets
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EventDetails;