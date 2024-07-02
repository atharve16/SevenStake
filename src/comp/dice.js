import React from 'react';

function Dice({ rollResult, totalPoints }) {
  return (
    <div className="dice-container">
      <h1>Player Points: {totalPoints}</h1>
      <h2>Dice Roll Result: {rollResult}</h2>
      <div className="dice-roll">
        <i className="fas fa-dice" />
        <span>{rollResult}</span>
      </div>
    </div>
  );
}

export default Dice;