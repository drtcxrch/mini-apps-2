import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Events from './events.jsx';
import ReactPaginate from 'react-paginate';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };

    this.loadEvents = this.loadEvents.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.search = this.search.bind(this);
    this.searchTextOnChange = this.searchTextOnChange.bind(this);
  }

  loadEvents(page, query) {
    console.log(this.props.url`?_page=${page}&_limit=${this.props.perPage}&q=${query}`)
    fetch(this.props.url`?_page=${page}&_limit=${this.props.perPage}&q=${query}`)
      .then((result) => {
        console.log(result.json());
      })
      .catch((err) => console.log('Error: err'));
  }

  handlePageClick(e) {
    console.log(e.selected);
    this.loadEvents(e.selected + 1, this.state.searchText)
  };

  search(e) {
    e.preventDefault();
    this.loadEvents(0, this.state.searchText);
  }

  searchTextOnChange(e) {
    this.setState({searchText: e.target.value});
  }

  render () {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <form onSubmit={this.search}>
          <label htmlFor="search">Search Event Keywords</label>
          <input onChange={this.searchTextOnChange} name="search" value={this.state.searchText}></input>
          <button type="submit">Search</button>
        </form>
        <Events events={this.state.events} />
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
        />
      </div>
    );
  }

};

App.propTypes = {
  url: PropTypes.string.isRequired,
  perPage: PropTypes.number.isRequired,
};

