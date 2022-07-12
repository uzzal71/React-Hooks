import { useState, useEffect } from 'react';
import './App.css';

const App = (props) => {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  },[name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  return (
    <div className="App">
      <h1>Congratulation {name}!</h1>
      <button onClick={() => setName("Will")}>Change Winner</button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin(!admin)}>{admin ? "Logout" : "Login"}</button>
    </div>
  );
}

export default App;
