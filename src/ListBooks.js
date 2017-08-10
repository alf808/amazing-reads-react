import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

/**
 * @description an intermediary container component
 * @prop books
 * @type Array required
 * @prop bs: pertinent bookshelf
 * @type String
 */
class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		bs: PropTypes.string
	}

	render () {
		const { books, bs, onShelfChange } = this.props
		let showingBooks = books.filter((book) => book.shelf === bs)

		return (
			<ol className="books-grid">
				{showingBooks.map((book) => (
					<BookItem key={book.id} book={book} onShelfChange={onShelfChange} />
				))}
			</ol>
		)
	}
}

export default ListBooks
