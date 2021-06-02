import React from 'react';

const Event = (props) => {
  return (
    <div className="event">
      <div className="date"><b>Event Date: </b> {props.event.date}</div>
      <div className="description"><b>Event Description: </b> {props.event.description}</div>
      <div className="lan"><b>Event Language: </b>{props.event.lang}</div>
      <div className="category1"><b>First Event Category: </b>{props.event.category1}</div>
      <div className="category2"><b>Second Event Category: </b>{props.event.category2}</div>
      <div className="granularity"><b>Event Granularity: </b>{props.event.granularity}</div>
    </div>
  )
}

export default Event;
