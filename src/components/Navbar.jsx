import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>Event Manager</h1>
      <div>
        <Link to="/" style={{ color: 'white', marginRight: '1rem', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/create-event" style={{ color: 'white', textDecoration: 'none' }}>Créer un événement</Link>
      </div>
    </nav>
  );
};

export default Navbar;
