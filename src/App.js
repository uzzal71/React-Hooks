import { useRef } from 'react';
import './App.css';

const App = (props) => {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    sound.current.value = "";
    color.current.value = "";
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder="sound..."/>
        <input ref={color} type="color" />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
