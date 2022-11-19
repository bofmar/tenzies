import React, { useState } from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [dice, setDice] = useState(() => allNewDice());

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }

    return diceArray;
  }

  function rollDice() {
    setDice(allNewDice);
  }

  return (
    <div className="App center--content">
      <main className='center--content main'>
        <div className='die--wrapper'>
          {dice.map(die => <Dice value={die} />)}
        </div>
        <button className='center--content disable--select' onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}

export default App;
