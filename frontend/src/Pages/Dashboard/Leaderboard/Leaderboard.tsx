import React from 'react';
import './Leaderboard.css';

interface LeaderboardEntry {
  id: number;
  name: string;
  avatar: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { id: 1, name: 'Kristin Watson', avatar: '/images/avatar1.png', score: 5778 },
    { id: 2, name: 'Guy Hawkins', avatar: '/images/avatar2.png', score: 4435 },
    { id: 3, name: 'Wade Warren', avatar: '/images/avatar3.png', score: 2200 },
    { id: 4, name: 'Jerome Bell', avatar: '/images/avatar4.png', score: 408 },
    { id: 5, name: 'Darrell Steward', avatar: '/images/avatar5.png', score: 224 },
    { id: 6, name: 'Cody Fisher', avatar: '/images/avatar6.png', score: 120 },
  ];

  const maxScore = Math.max(...leaderboardData.map(item => item.score));

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>Leaderboard</h2>
        <div className="date-filter">
          <span>10-11-2023</span>
          <button className="filter-button">⌄</button>
        </div>
      </div>

      <div className="leaderboard-content">
        {leaderboardData.map(person => (
          <div className="leaderboard-row" key={person.id}>
            <div className="person-info">
              <img className="avatar" src={person.avatar} alt={person.name} />
              <span className="name">{person.name}</span>
            </div>
            <div className="score-bar-container">
              <div 
                className="score-bar" 
                style={{ width: `${(person.score / maxScore) * 100}%` }}
              ></div>
              <span className="score-value">{person.score}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="score-scale">
        <span>0</span>
        <span>500</span>
        <span>3K</span>
        <span>5K</span>
      </div>
    </div>
  );
};

export default Leaderboard;
