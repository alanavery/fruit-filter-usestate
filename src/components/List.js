import React, { useState } from 'react';

function List(props) {
  const fruitItems = props.fruits.map((eachFruit, index) => {
    return <li>{eachFruit}</li>;
  });
  return (
    <div>
      <ul>{fruitItems}</ul>
    </div>
  );
}

export default List;
