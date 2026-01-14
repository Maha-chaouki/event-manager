import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import HeroSlider from '../components/HeroSlider';
import LoginModal from '../components/LoginModal';

const Home = () => {
  const events = useSelector(state => state.events.events);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Group events by category
  const groupedByCategory = events.reduce((acc, event) => {
    const category = event.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(event);
    return acc;
  }, {});

  // Group events by city (location)
  const groupedByCity = events.reduce((acc, event) => {
    const city = event.location || 'Unknown Location';
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(event);
    return acc;
  }, {});

  // Combine groups, avoiding duplicates by using a set of event ids
  const allGroups = {};
  const processedEvents = new Set();

  // Add category groups
  Object.keys(groupedByCategory).forEach(category => {
    if (groupedByCategory[category].length > 0) {
      allGroups[category] = groupedByCategory[category].filter(event => {
        if (!processedEvents.has(event.id)) {
          processedEvents.add(event.id);
          return true;
        }
        return false;
      });
    }
  });

  // Add city groups
  /*Object.keys(groupedByCity).forEach(city => {
    if (groupedByCity[city].length > 0) {
      allGroups[city] = groupedByCity[city].filter(event => {
        if (!processedEvents.has(event.id)) {
          processedEvents.add(event.id);
          return true;
        }
        return false;
      });
    }
  });*/

  return (
    <div>
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <HeroSlider />
      <h1>Événements</h1>
      {events.length === 0 ? (
        <p>Événement non trouvé</p>
      ) : (
        Object.keys(allGroups).map(groupName => (
          <div key={groupName}>
            <h2>{groupName}</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              
              gap: '10px',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 20px'
            }}>
              {allGroups[groupName].map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        ))
      )}
      <div style={{ marginBottom: "80px" }} />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default Home;
