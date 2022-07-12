import { useState, useEffect } from 'react';
import './App.css';

const App = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData)
  }, []);

  if (!data) return <p>Not User</p>;

  return (
    <div className="App">
      <ul>
          {data.map(user => (
            <li key={user.id}>{user.login}</li>
          ))}
      </ul>
      <button onClick={() => setData([])}>Remove data</button>
    </div>
  );
}

export default App;
