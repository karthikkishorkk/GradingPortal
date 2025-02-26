import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src="https://images.seeklogo.com/logo-png/51/2/amrita-vishwa-vidyapeetham-logo-png_seeklogo-519922.png" 
          alt="Amrita Vishwa Vidyapeetham" 
          className="logo" 
        />
      </div>
      <div className="header-right">
        <h1>Admin Portal</h1>
        <div className="logout-container">
          <span className="notification-icon">🔔</span>
          <button className="logout-button">Log out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;