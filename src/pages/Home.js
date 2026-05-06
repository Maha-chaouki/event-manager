import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const events = useSelector(state => state.events.events);

  return (
    <div>
      <Header />
      <HeroSlider />

      <h1 style={{  margin: '2rem 0' }}>Événements</h1>

      {events.length === 0 ? (
        <p  >Aucun événement disponible</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '10px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      <div style={{ marginBottom: '80px' }} />
      <Footer />
    </div>
  );
};

export default Home;
