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

		if (!query) {
 				this.setState({results: []});
 				return;
 		}

		BooksAPI.search(query, 20).then(results => {
			if (results.error) {
					results = [];
			}
			results = results.map((book) => {
					const bookInShelf = this.props.books.find(b => b.id === book.id);
					if (bookInShelf) {
							book.shelf = bookInShelf.shelf;
					}
					return book;
			});
			this.setState({results});
		});
		console.log(this.state.results)
	}





	clearQuery = () => {
		this.setState({ query: '', results: []})
	}

	render() {

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
					<div className="search-container">
						<input type="text" placeholder="Search by title or author"
							className="search-input-field"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
						{/*JSON.stringify(this.state.query)*/}
						<button onClick={this.clearQuery} className="clear-query-button">x</button>
						</div>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.results && this.state.results.map((book) => (
							<BookItem key={book.id} book={book ? book : null} onShelfChange={this.props.onShelfChange} />
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchAmazingBooks
