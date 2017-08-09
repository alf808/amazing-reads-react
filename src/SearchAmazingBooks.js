import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types';
//import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class SearchAmazingBooks extends Component {
	state = {
		query: '',
		results: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })

		if(query.trim() !== '') {
			BooksAPI.search(query, 20).then(books => this.setState({
				results: books
			}))
		} else {
			this.setState({
				results: []
			})
		}
	}

	clearQuery = () => {
		this.setState({ query: ''})
	}

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
					<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
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
