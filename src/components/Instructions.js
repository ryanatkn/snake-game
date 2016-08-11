import React from 'react';
import './Instructions.css';

export default function Instructions() {
  return (
    <div className="Instructions">
      <p>use the arrow keys to move</p>
      <p style={{position: 'relative', top: 0, left: -15}}>
        eat apples!
      </p>
      <p style={{position: 'relative', top: 55, left: 55}}>
        don't bite yourself
      </p>
    </div>
  );
}
