import React, { useState } from 'react';

function Bet({ setBet, setBetStake, handleRoll }) {
  const [stake, setStake] = useState(100);
  const [choice, setChoice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBet(choice);
    setBetStake(Number(stake));
    handleRoll();
  };

  return (
    <form onSubmit={handleSubmit} className="bet-form">
      <div>
        <label>
          Stake:
          <select value={stake} onChange={(e) => setStake(Number(e.target.value))}>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={500}>500</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Bet:
          <select value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">Select...</option>
            <option value="below">Below 7</option>
            <option value="seven">7</option>
            <option value="above">Above 7</option>
          </select>
        </label>
      </div>
      <button type="submit" className="roll-button">
        Roll the Dice
      </button>
    </form>
  );
}

export default Bet;