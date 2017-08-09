import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'
// import PropTypes from 'prop-types';
//import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class SearchAmazingBooks extends Component {

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
					<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">


          </ol>
        </div>
      </div>
    )
  }
}

export default SearchAmazingBooks
