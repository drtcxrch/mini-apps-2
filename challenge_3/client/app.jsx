import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pinsStanding: 10,
      score: 0,
      currentFrame: 1,
      bowl: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBowlChange = this.handleBowlChange.bind(this);
    this.calculateScore = this.calculateScore.bind(this);
  }

  calculateScore() {
    var frames = Object.fromEntries(Object.entries(this.state).filter(([key, value]) => key.slice(0, 5) === 'frame'));
    console.log('frames:', frames);
    var score = 0;

    for (var frame in frames) {
      console.log('key', frame, 'frames[key]', frames[frame]);
      var frameTotals = frames[frame];
      if (frameTotals.isStrike || frameTotals.roll_2 === '/') {
        score += 10;
        this.setState({ [frame]: { ...this.state.[frame], frameScore: score } });
      } else if (frameTotals.roll_2) {
        var rollOne = Number(frameTotals.roll_1);
        var rollTwo = Number(frameTotals.roll_2);
        console.log('rollOne', rollOne, 'rollTwo', rollTwo);
        var frameScore = Number(frameTotals.roll_1) + Number(frameTotals.roll_2);
        console.log('frameTotals', frameTotals);
        score += frameScore;
        this.setState({ [frame]: { ...this.state.[frame], frameScore: score } });
      }


    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calculateScore();
    this.setState({bowl: ''});
  }

  handleBowlChange(e) {
    var currentRoll = e.target.value;
    var frame = `frame_${this.state.currentFrame}`;
    console.log(currentRoll);

    this.setState({bowl: currentRoll}, () => {
      if (!this.state.[frame]) {
        if (currentRoll === 'x') {
          var newFrame = this.state.currentFrame + 1;
          this.setState({ [frame]: { isStrike: true }, currentFrame: newFrame }, () => {
            console.log(this.state);
          });
        } else {
          this.setState({ [frame]: { roll_1: this.state.bowl }, pinsStanding: this.state.pinsStanding - currentRoll }, () => console.log(this.state))
        }
      } else if (this.state.pinsStanding - currentRoll < 0) {
        alert(`Too many pins entered: please enter a number less than ${this.state.pinsStanding + 1}`)
      } else {
        if (this.state.pinsStanding - currentRoll === 0) {
          console.log('true');
          this.setState({ [frame]: { ...this.state.[frame], roll_2: '/', isSpare: true }, pinsStanding: 10 });
        } else {
          this.setState({ [frame]: { ...this.state.[frame], roll_2: this.state.bowl }, pinsStanding: 10 }, () => {
            var newFrame = this.state.currentFrame + 1;
            this.setState({ currentFrame: newFrame }, () => {
              console.log(this.state)
            });
          });
        }
      }
    });
  }

  render () {
    var frames = Object.fromEntries(Object.entries(this.state).filter(([key, value]) => key.slice(0, 5) === 'frame'));

    return (
      <div>
        <div className="form-container">
          <form ref={form => this.form = form}
          onSubmit={this.handleSubmit}>
            <label>
              Enter number of pins hit or an 'x' for a strike:
            <input
              type="text"
              className="roll-score"
              placeholder="What did you roll?"
              value={this.state.bowl}
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

