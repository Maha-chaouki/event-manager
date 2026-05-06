import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
      maxWidth: '320px',
  
      margin: '0 auto'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}>
      
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '0.75rem',
          lineHeight: '1.3',
          display: 'flex',
          alignItems: 'center'
        }}>
           {event.title}
        </h3>
        <div style={{ marginBottom: '0.5rem' }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            margin: '0.25rem 0',
            display: 'flex',
            alignItems: 'center'
          }}>
             {event.date} at {event.time}
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            margin: '0.25rem 0',
            display: 'flex',
            alignItems: 'center'
          }}>
             {event.location}
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: '#555',
            margin: '0.25rem 0',
            display: 'flex',
            alignItems: 'center'
          }}>
             {event.price}
          </p>
        </div>
        <p style={{
          fontSize: '0.9rem',
          color: '#555',
          lineHeight: '1.4',
          marginBottom: '1rem',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>{event.description}</p>
        <Link to={`/event/${event.id}`} style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '0.9rem',
          fontWeight: '500',
          transition: 'background-color 0.3s'
        }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
