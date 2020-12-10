import React, { useState } from 'react';

import List from './List';
import Input from './Input';

function FruitContainer(props) {
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
  const [filteredValue, setFilteredValue] = useState('');

  const handleFilterChange = (e) => {
    e.preventDefault();
    let filteredValue = e.target.value;
    const filteredFruitList = props.fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(filteredValue.toLowerCase());
    });
    setFruitsToDisplay(filteredFruitList);
    setFilteredValue(filteredValue);
  };

  console.log(props.fruits);
  console.log(fruitsToDisplay);
  return (
    <div>
      <Input value={filteredValue} onChange={handleFilterChange} />
      <List fruits={fruitsToDisplay} />
    </div>
  );
}

export default FruitContainer;
