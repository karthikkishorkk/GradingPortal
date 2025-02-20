import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './sidebarStyle.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <Nav className="flex-column">
          <Nav.Item className="sidebar-links-container">
            <Nav.Link className="sidebar-links" href="#">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item className="sidebar-links-container">
            <Nav.Link className="sidebar-links" href="#">Faculty</Nav.Link>
          </Nav.Item>
          <Nav.Item className="sidebar-links-container">
            <Nav.Link className="sidebar-links" href="#">Events</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <button 
        className="bookmark-button" 
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "▶" : "◀"}
      </button>
    </div>
  );
};

export default Sidebar;
