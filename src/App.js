import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [dice, setDice] = useState(() => allNewDice());

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      });
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
          {dice.map(die => <Dice value={die.value} key={die.id} />)}
        </div>
        <button className='center--content disable--select' onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}

export default App;
