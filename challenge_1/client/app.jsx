import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Events from './events.jsx';
import { Table } from 'react-bootstrap';
import './styles.css';
import ReactPaginate from 'react-paginate';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      events: [],
      pageCount: 0,
      searchText: ''
    };

    this.loadEvents = this.loadEvents.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.search = this.search.bind(this);
    this.searchTextOnChange = this.searchTextOnChange.bind(this);
  }

  loadEvents(query, page) {
    fetch(`http://localhost:3000/events?_page=${page}&_limit=10&q=${query}`)
      .then((result) => {
        this.setState({ pageCount: Math.ceil(Number(result.headers.get('X-Total-Count')) / 10) })
        return result.json()
      })
      .then((data) => {
        this.setState({
          events: data,
        })
      })
      .catch((err) => console.error(err));
  }

  handlePageClick(e) {
    console.log(e.selected);
    this.loadEvents(this.state.searchText, e.selected + 1)
  };

  search(e) {
    e.preventDefault();
    this.loadEvents(this.state.searchText, 1);
  }

  searchTextOnChange(e) {
    console.log(e.target.value);
    this.setState({searchText: e.target.value});
  }

  // componentDidMount() {

  //   this.loadEvents('Pilgrims', 1)
  // }
  // pagination() {
  //   if (pageCount > 0) {

  //   }
  // }

  render () {
    return (
      <div >
        <div id="form">
          <h1>Historical Events Finder</h1>
          <form onSubmit={this.search} >
            <label htmlFor="search">Search Event Keywords: </label>
            <input
              type="text"
              id="searchText"
              name="searchText"
              value={this.state.searchText}
              onChange={this.searchTextOnChange}
              />
            <input
              type="submit"
              value="Submit"
              />
          </form>
        </div>
        <Events events={this.state.events} />
        <div id="paginate">
          {this.state.pageCount > 0 &&
            <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />}
        </div>
      </div>
    );
  }

};


