import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		bs: PropTypes.string
	}

	render () {
		const { books, bs } = this.props
		let showingBooks = books.filter((book) => book.shelf === bs)
// console.log(showingBooks)
// showingBooks.map((book) => console.log(book))
		// showingBooks.sort(sortBy('shelf'))
// onChange={(event) => onShelfChange(event, book)}
		return (
			<ol className="books-grid">
				{showingBooks.map((book) => (
					<BookItem key={book.id} book={book} onShelfChange={this.props.onShelfChange} />
				))}
			</ol>
		)
	}
}

export default ListBooks
