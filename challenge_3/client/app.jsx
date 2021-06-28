import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';

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

    this.bowl = this.bowl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bowlOnChange = this.bowlOnChange.bind(this);
  }

  bowl() {

  }

  handleSubmit() {

  }

  bowlOnChange() {

  }

  render () {
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.bowl}>
            <label>
              Bowl:
            <input
              type="text"
              className="roll-score"
              placeholder="Enter Pin Count Here"
              value={this.bowlOnChange}
              />
            </label>
            <input
              type="submit"
              value="Submit Score"
              />
          </form>
        </div>
        <Table />
      </div >
    )
  }

}

export default App;

