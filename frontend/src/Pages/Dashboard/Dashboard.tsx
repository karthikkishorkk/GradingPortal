import React from 'react';
import Leaderboard from './Leaderboard/Leaderboard.tsx';
import StatsCards from './StatsCards/StatsCards.tsx';
import Header from '../../Components/Header/Header.tsx';
import Sidebar from '../../Components/Sidebar/Sidebar.tsx';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <div className="leaderboard-content">
        
          <div className="right-section">
          <Leaderboard />
            </div>
          </div>
            <div className="stats-content">
              <StatsCards />
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
