import './App.css';
import { useTrees } from './';

const App = () => {
  const { trees } = useTrees();

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
