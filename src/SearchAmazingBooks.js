import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class SearchAmazingBooks extends Component {
	state = {
		query: '',
		results: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })

		if(query) {
			BooksAPI.search(query, 20).then(books => this.setState({
				results: books
			}))
		} else {
			this.setState({
				results: []
			})
		}
		// console.log(this.state.results)
	}

	clearQuery = () => {
		this.setState({ query: ''})
	}

	render() {

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
						{/*JSON.stringify(this.state.query)*/}
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.results.map((book) => (
							<BookItem key={book.id} book={book ? book : null} onShelfChange={this.props.onShelfChange} />
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchAmazingBooks
