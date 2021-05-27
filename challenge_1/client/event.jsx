import React from 'react';

const Event = (props) => {
  return (
    <div>
      <div>{props.event.date}</div>
      <div>{props.event.description}</div>
      <div>{props.event.lang}</div>
      <div>{props.event.category1}</div>
      <div>{props.event.category2}</div>
      <div>{props.event.granularity}</div>
    </div>
  )
}

export default Event;
