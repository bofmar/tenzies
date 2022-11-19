import Dice from './components/Dice';
import './App.css';

function App() {
  return (
    <div className="App center--content">
      <main className='center--content'>
        <div className='die--wrapper'>
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
          <Dice value={1} />
        </div>
      </main>
    </div>
  );
}

export default App;
