import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pinsStanding: 10,
      score: 0,
      currentFrame: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBowlChange = this.handleBowlChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.form.reset();

  }

  handleBowlChange(e) {
    var bowl = e.target.value;
    var frame = `frame_${this.state.currentFrame}`;
    var currentFrame = this.state.currentFrame;

    if (!this.state.[frame]) {
      this.setState({[frame]: {roll_1: bowl}}, () => console.log(this.state))
    } else {
      this.setState({[frame]: {...this.state.[frame], roll_2: bowl}}, () => {
        var newFrame = this.state.currentFrame + 1;
        this.setState({currentFrame: newFrame }, () => {
          frame = `frame_${this.state.currentFrame + 1}`;
          console.log(this.state)});
      });

    }

  }

  render () {
    var frames = Object.fromEntries(Object.entries(this.state).filter(([key, value]) => key.slice(0, 5) === 'frame'));

    return (
      <div>
        <div className="form-container">
          <form ref={form => this.form = form}
          onSubmit={this.handleSubmit}>
            <label>
              Bowl:
            <input
              type="text"
              className="roll-score"
              placeholder="Enter Pin Count Here"
              value={`this.state.frames.frame_${this.state.currentFrame}`.roll_1 === null ? `this.state.frames.frame_${this.state.currentFrame}`.roll_1 : `this.state.frames.frame_${this.state.currentFrame}`.roll_2}
              onChange={this.handleBowlChange}
              />
            </label>
            <input
              type="submit"
              value="Submit Score"
              />
          </form>
        </div>
        <Table score={frames}/>
      </div >
    )
  }

}

export default App;

