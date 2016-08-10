import React from 'react';
import './Score.css';

export default function Score({score}) {
  return (
    <div className="Score">
      <span className="Score-number">{score}</span>
      <span className="Score-label">apple{score === 1 ? '' : 's'}</span>
    </div>
  );
}
