import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Dice from './components/Dice';
import './App.css';

function App() {
  const [dice, setDice] = useState(() => allNewDice());

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(getNewDie());
    }

    return diceArray;
  }

  function getNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => die.isHeld ? die : getNewDie()));
  }

  function hold(id) {
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die));
  }

  return (
    <div className="App center--content">
      <main className='center--content main'>
        <div className='die--wrapper'>
          {dice.map(die => <Dice value={die.value} isHeld={die.isHeld} hold={() => hold(die.id)} key={die.id} />)}
        </div>
        <button className='center--content disable--select' onClick={rollDice}>Roll</button>
      </main>
    </div>
  );
}

export default App;
