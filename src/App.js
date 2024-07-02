import React, { useState } from 'react';
import Dice from './comp/dice';
import Bet from './comp/betform';
import Result from './comp/result';
import './App.css';

function App() {
  const [bet, setBet] = useState(null);
  const [rollResult, setRollResult] = useState(null);
  const [message, setMessage] = useState('');
  const [betStake, setBetStake] = useState(0);
  const [totalPoints, setTotalPoints] = useState(5000);

  const handleRoll = () => {
    const result = Math.floor(Math.random() * 12) + 1;
    setRollResult(result);
    calculateResult(result);
  };

  const calculateResult = (result) => {
    if (bet === 'below' && result < 7) {
      setMessage(`You win! Double your stake of ${betStake}!`);
      setTotalPoints(totalPoints + betStake);
    } else if (bet === 'above' && result > 7) {
      setMessage(`You win! Double your stake of ${betStake}!`);
      setTotalPoints(totalPoints + betStake);
    } else if (bet === 'seven' && result === 7) {
      setMessage(`You win! Five times your stake of ${betStake}!`);
      setTotalPoints(totalPoints + betStake * 4); // Player wins 5 times, so net win is 4 times the stake
    } else {
      setMessage('You lose! Better luck next time.');
      setTotalPoints(totalPoints - betStake);
    }
  };

  return (
    <div className="App">
      <h1>Dice Game</h1>
      <Dice rollResult={rollResult} totalPoints={totalPoints} />
      <Bet setBet={setBet} setBetStake={setBetStake} handleRoll={handleRoll} />
      <Result message={message} />
    </div>
  );
}

export default App;