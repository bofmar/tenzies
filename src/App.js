import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useWindowSize } from '@react-hook/window-size'
import Dice from './components/Dice';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [dice, setDice] = useState(() => allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setTenzies(isWon());
  }, [dice]);

  function isWon() {
    return dice.every(die => die.isHeld && die.value === dice[0].value);
  }

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
    setDice(prevDice => prevDice.map(die => tenzies ? getNewDie() : die.isHeld ? die : getNewDie()));
  }

  function hold(id) {
    setDice(prevDice => prevDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die));
  }

  return (
    <div className="App center--content">
      <main className='center--content main'>
        {tenzies && <Confetti width={width} height={height} />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='die--wrapper'>
          {dice.map(die => <Dice value={die.value} isHeld={die.isHeld} hold={() => hold(die.id)} key={die.id} />)}
        </div>
        <button className='center--content disable--select' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
      </main>
    </div>
  );
}

export default App;
