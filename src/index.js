import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const TreesContext = createContext();

export const useTrees = () => useContext(TreesContext);

const trees = [
  {id: 1, name: "Nasir Uddin"},
  {id: 2, name: "Dip Saha"},
  {id: 3, name: "Uzzal Roy"},
  {id: 4, name: "Juwel Rana"},
];

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);
