import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';
import Roll from './roll.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      roll_1: 0,
      roll_2: 0,
      isStrike: false,
      isSpare: false,
      isRoll_1: true
    }
  }

  render () {
    return (
      <div>
        <Roll />
        <Table />
      </div >
    )
  }

}

export default App;

