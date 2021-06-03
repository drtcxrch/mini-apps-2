import React from 'react';
import ReactDom from 'react-dom';
import Chart from './Chart.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dates: [],
      prices: [],
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
        let dates = Object.keys(bpiData);
        let prices = Object.values(bpiData);

       this.setState({
         dates: dates,
         prices: prices,
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
        <Chart dates={this.state.dates} prices={this.state.prices} />
        <footer>{this.state.disclaimer}</footer>
      </div>
    )
  }
}

export default App;

