import { useState } from 'react';
import './App.css';
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
  ...Array(length)
];

const Star = ({ selected=false }) => {
  return <FaStar color={selected ? "red" : "gray"}/>
};

const StarRating = ({ totalStars = 5 }) => {
  return createArray(totalStars).map((n, i) => (
    <Star key={i}/>
  ));
};

const App = (props) => {

  return (
    <div className="App">
      <StarRating totalStars={10}/>
    </div>
  );
}

export default App;
