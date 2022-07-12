import { useReducer } from 'react';
import './App.css';

const initialState = {
  message: "Hi"
}

const reducer = (state, action) => {
  switch(action.type) {
    case "nasir":
      return {
        message: "Hello Nasir, How are you?"
      };
    case "juwel":
      return {
        message: "Hi juwel where are you?"
      };
  }
}

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "nasir" })}>Nasir</button>
      <button onClick={() => dispatch({ type: "juwel" })}>Juwel</button>
    </div>
  );
}

export default App;
