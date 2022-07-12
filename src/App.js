import './App.css';
import { TreesContext } from './';
import { useContext } from 'react';

const App = () => {
  const { trees } = useContext(TreesContext);

  return (
    <div className="App">
      <h1>Trees I've heard of</h1>
      <ul>
        {trees.map(tree => (
          <li key={tree.id}>{tree.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
