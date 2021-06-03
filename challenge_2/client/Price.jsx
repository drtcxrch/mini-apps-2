import React from 'react';

const Price = (props) => {
  console.log(props);
  return (
    <div className="date">
      <div id="date"><b>On: </b> {props.price.date}</div>
      <div id="bpi"><b>The BPI Was: </b> {props.price.price}</div>
    </div>
  )
}

export default Price;