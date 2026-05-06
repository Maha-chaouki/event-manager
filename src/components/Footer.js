import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '50px 20px 20px',
        width: '100%',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
        }}
      >
     
        <div>
          <h3 style={{ marginBottom: '15px', color: '#d14396ff' }}>
            EventManager
          </h3>
          <p style={{ lineHeight: '1.7', opacity: 0.8 }}>
            Créer, gérer et découvrir des événements inoubliables.
            Rassembler les gens, un événement à la fois.
          </p>
        </div>

        
        <div>
          <h4 style={{ marginBottom: '15px', color: '#d14396ff' }}>
            Liens rapides
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px', opacity: 0.8 }}>Accueil</li>
            <li style={{ marginBottom: '10px', opacity: 0.8 }}>
              Créer un événement
            </li>
            <li style={{ marginBottom: '10px', opacity: 0.8 }}>Sign In</li>
          </ul>
        </div>

     
        <div>
          <h4 style={{ marginBottom: '15px', color: '#d14396ff' }}>
            Contact
          </h4>
          <p style={{ margin: '8px 0', opacity: 0.8 }}>
            eventmanager@566.com
          </p>
          <p style={{ margin: '8px 0', opacity: 0.8 }}>
            +212 6 88 07 14 77
          </p>
          <p style={{ margin: '8px 0', opacity: 0.8 }}>
            Morocco
          </p>
        </div>

      
        <div>
          <h4 style={{ marginBottom: '15px', color: '#d14396ff' }}>
            Suivez-nous
          </h4>
          <div style={{ display: 'flex', gap: '15px', fontSize: '22px' }}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      <hr
        style={{
          border: 'none',
          borderTop: '1px solid #333',
          margin: '40px 0 20px',
        }}
      />

      <div style={{ textAlign: 'center', opacity: 0.7 }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} EventManager. Tous droits réservés.
        </p>
        <p style={{ marginTop: '6px', fontSize: '14px' }}>
          Créé avec pour les passionnés d’événements
        </p>
      </div>
    </footer>
  );
};

export default Footer;
