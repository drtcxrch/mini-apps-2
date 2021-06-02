import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bpi: [],
      disclaimer: '',
      time: ''
    }
  }

  componentDidMount() {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((result) => {
        return result.json()
      })
      .then((data) => {
       this.setState({
         bpi: data.bpi,
         disclaimer: data.disclaimer,
         time: data.time
       })
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        Hello world!
      </div>
    )
  }
}

export default App;

