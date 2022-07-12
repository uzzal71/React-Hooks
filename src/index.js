import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [, , thrid] = ["Uzzal", "Kumar", "Roy"];

console.log(thrid);

ReactDOM.render(
  <React.StrictMode>
    <App name="Uzzal Roy"/>
  </React.StrictMode>,
  document.getElementById('root')
);
