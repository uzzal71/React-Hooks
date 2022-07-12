import { useState } from 'react';
import './App.css';

const App = (props) => {
  const [sound, setSound] = useState();
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${sound} sounds like ${color}`);

    setSound("");
    setColor("#000000");
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input value={sound} type="text" placeholder="sound..." onChange={(e) => setSound(e.target.value)}/>
        <input value={color} type="color"  onChange={(e) => setColor(e.target.value)}/>
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
