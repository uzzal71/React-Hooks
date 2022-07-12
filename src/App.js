import { useState, useEffect } from 'react';
import './App.css';

const App = (props) => {
  const [name, setName] = useState("Jan");

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  },[name]);

  return (
    <div className="App">
      <h1>Congratulation {name}!</h1>
      <button onClick={() => setName("Will")}>Change Winner</button>
    </div>
  );
}

export default App;
