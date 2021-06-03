import React from 'react';
import Price from './Price.jsx';

const Prices = (props) => {
  return (
    <ul>
      {props.bpi.map((price, index) =>
        <Price key={index} price={price} />
      )}
    </ul>
  );
}

export default Prices;