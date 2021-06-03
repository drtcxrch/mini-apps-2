import React from 'react';
import ReactDom from 'react-dom';
import Prices from './Prices.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bpi: [],
      disclaimer: '',
      time: {}
    }
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        console.log(data.bpi);
        let bpiData = data.bpi;
        let formatted = [];
        for (var date in bpiData) {
          var bpiOnDate = {};
          bpiOnDate[date] = bpiData[date];
          formatted.push(bpiOnDate);
        }
       this.setState({
         bpi: formatted,
         disclaimer: data.disclaimer,
         time: data.time
       })
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Bitcoin Prices as of {this.state.time.updated}</h1>
        <Prices bpi={this.state.bpi} />
        <footer>{this.state.disclaimer}</footer>
      </div>
    )
  }
}

export default App;

