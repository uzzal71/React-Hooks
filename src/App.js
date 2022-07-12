import { useState } from 'react';
import './App.css';

const App = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <h1>React Hooks Created By {props.name}</h1>
      <input type="checkbox" onChange={() => setChecked((checked) => !checked)}/>
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default App;
