import React, { useState } from 'react';
import './Teacherlist.css'


const Teacherlist = () => {
  const [teachers] = useState([
    {
      name: "Dr. Subhasri Duttagupta S D",
      subject: "Chemistry",
      class: "JSS 2",
      email: "michelle.rivera@example.com",
      gender: "Female"
    },
    {
      name: "Dr. Simi S",
      subject: "French",
      class: "JSS 3",
      email: "debbie.baker@example.com",
      gender: "Female"
    }
  ]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src="blue_am.png" alt="Logo" className="logo" />
        </div>
        <nav className="nav-menu">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Faculty</div>
          <div className="nav-item">Events</div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1 className="page-title">Teacher Details</h1>
          <div className="user-actions">
            <button className="logout-button">Log out</button>
          </div>
        </div>

        {/* Search and Add Teacher */}
        <div className="action-bar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a teachers by name or email"
              className="search-input"
            />
          </div>
          
        </div>

        {/* Teachers Table */}
        <div className="table-container">
          <table className="teachers-table">
            <thead>
              <tr className="table-header-row">
                <th className="table-header-cell">Name</th>
                <th className="table-header-cell">Subject</th>
                <th className="table-header-cell">Class</th>
                <th className="table-header-cell">Email address</th>
                <th className="table-header-cell">Gender</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className={index === teachers.length - 1 ? "table-row last-row" : "table-row"}>
                  <td className="table-cell">
                    <div className="teacher-name-container">
                      <div className="avatar"></div>
                      {teacher.name}
                    </div>
                  </td>
                  <td className="table-cell">{teacher.subject}</td>
                  <td className="table-cell">{teacher.class}</td>
                  <td className="table-cell">{teacher.email}</td>
                  <td className="table-cell">{teacher.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teacherlist;