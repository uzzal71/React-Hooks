import { useState } from 'react';
import './App.css';

const App = (props) => {
  const [status, setStatus] = useState("Not Delivered!");

  return (
    <div className="App">
      <h1>React Hooks Created By {props.name}</h1>
      <h3>This package is: {status}</h3>
      <button onClick={() => setStatus("Delivered")}>Delivered</button>
    </div>
  );
}

export default App;
