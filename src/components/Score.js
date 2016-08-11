import React from 'react';
import './Score.css';

export default function Score({score}) {
  return (
    <div className="Score">
      {score}
    </div>
  );
}
