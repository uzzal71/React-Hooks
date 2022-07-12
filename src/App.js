import { useInput } from './useInput';
import './App.css';

const App = (props) => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} color likes ${colorProps.value}`);

    resetTitle("");
    resetColor("#000000");
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text" placeholder="sound..." {...titleProps}/>
        <input type="color"  {...colorProps}/>
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
