import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	clearQuery = () => {
		this.setState({ query: ''})
	}

	render () {
		const { books, bs } = this.props
		const { query } = this.state


		let showingBooks
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingBooks = books.filter((book) => match.test(book.title))
		} else {
			showingBooks = books.filter((book) => book.shelf === bs)
		}

		// showingBooks.sort(sortBy('shelf'))

		return (
			<ol className="books-grid">
			{console.log({showingBooks})}
			{showingBooks.map((book) => (
				<li key={book.id}>
					<div className="book">
						<div className="book-top" style={{ width: 128, height: 193,
						backgroundImage: `url(${book.imageLinks.thumbnail})`}}>

						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.authors}</div>

					</div>
				</li>
			))}
			</ol>
		)

	}
}

export default ListBooks
