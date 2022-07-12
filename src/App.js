import { useReducer } from 'react';
import './App.css';

const App = (props) => {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0);

  return (
    <div className="App">
      <h1 onClick={() => setNumber(1)}>{number}</h1>
    </div>
  );
}

export default App;
