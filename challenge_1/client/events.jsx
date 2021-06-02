import React from 'react';
import PropTypes from 'prop-types';
import Event from './event.jsx';

export default class Events extends React.Component {

  render() {
    return (
    <ul>
      {this.props.events.map((event, index) =>
        <Event key={index} event={event} />
      )}
    </ul>
    );
  }
}
