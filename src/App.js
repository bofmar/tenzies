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

  return (
    <div className="App center--content">
      <main className='center--content'>
        <div className='die--wrapper'>
          {dice.map(die => <Dice value={die} />)}
        </div>
      </main>
    </div>
  );
}

export default App;
