import React from 'react';
import './StatsCards.css';

interface Stat {
  id: number;
  title: string;
  value: number;
  icon: string;
}

const StatsCards: React.FC = () => {
  const stats: Stat[] = [
    { id: 1, title: 'Total Points', value: 5452, icon: '⭐' },
    { id: 2, title: 'Total Faculty', value: 45, icon: '👤' },
    { id: 3, title: 'Total Events', value: 245, icon: '📅' }
  ];
  
  return (
    <div className="stats-container">
      {stats.map(stat => (
        <div className="stat-card" key={stat.id}>
          <div className="stat-info">
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-title">{stat.title}</p>
          </div>
          <div className="stat-icon">
            <span>{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;