import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Events from './events.jsx';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

export default class App extends React.Component {

  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
    };

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      data: { limit: this.props.perPage, offset: this.state.offset },
      dataType: 'json',
      type: 'GET',

      success: (data) => {
        if (this._isMounted) {

          this.setState({
            data: data,
            pageCount: Math.ceil(data.length / 10),
          });
        }

      },

      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line
      },
    });
  }

  componentDidMount() {
    this._isMounted = true;

    this.loadCommentsFromServer();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handlePageClick = (data) => {
    let selected = events.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  };

  render () {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Events events={this.state.data} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
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

