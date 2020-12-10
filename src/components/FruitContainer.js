import React, { useState } from 'react';

import List from './List';
import Input from './Input';

function FruitContainer(props) {
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (e) => {
    e.preventDefault();
    let filterValue = e.target.value;
    const filteredFruitList = props.fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFruitsToDisplay(filteredFruitList);
    setFilterValue(filterValue);
  };

  console.log(props.fruits);
  console.log(fruitsToDisplay);
  return (
    <div>
      <Input value={filterValue} onChange={handleFilterChange} />
      <List fruits={fruitsToDisplay} />
    </div>
  );
}

export default FruitContainer;
