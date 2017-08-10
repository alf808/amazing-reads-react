import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem'
// import escapeRegExp from 'escape-string-regexp'

/**
 * @description Search component
 * @prop books
 * @type Array required
 * @prop onShelfChange
 * @type Function required
 * @state query
 * @type String
 * @state results
 * @type Array
 */
class SearchAmazingBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	state = {
		query: '',
		results: []
	}

	// This function is the primary function that retrieves search results from
	// the BooksAPI. It also mediates the corresponding shelves of books.
	updateQuery = (query) => {
		this.setState({ query })

		if (!query) {
				this.setState({results: []})
				return
		}

		BooksAPI.search(query, 20).then(results => {
			if (results.error) {
					results = []
			}
			results = results.map((book) => {
					// based on code I saw on slack
					const bookInShelf = this.props.books.find(b => b.id === book.id)
					if (bookInShelf) {
							book.shelf = bookInShelf.shelf
					}
					return book
			});
			this.setState({results})
		})
	}

	// This function will clear the query and results activated by button element.
	clearQuery = () => {
		this.setState({ query: '', results: []})
	}

	render() {
		const { onShelfChange } = this.props
		const { query, results } = this.state

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
					<div className="search-container">
						<input type="text" placeholder="Search by title or author"
							className="search-input-field"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
						<button onClick={this.clearQuery} className="clear-query-button">clear query</button>
						</div>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{results && results.map((book) => (
							<BookItem key={book.id} book={book ? book : null} onShelfChange={onShelfChange} />
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchAmazingBooks
