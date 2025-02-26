import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="menu-item active">
        <span className="icon"></span>
        <img src="/images/pngegg.png" alt="home" className="logo1" />
        <span className="menu-text">Dashboard</span>
      </div>
      <div className="menu-item">
        <span className="icon"></span>
        <img src="/images/faculty.png" alt="faculty" className="logo1" />
        <span className="menu-text">Faculty</span>
      </div>
      <div className="menu-item">
        <img src="/images/event.png" alt="events" className="logo1" />
        <span className="menu-text">Events</span>
      </div>
    </div>
  );
};

export default Sidebar;
