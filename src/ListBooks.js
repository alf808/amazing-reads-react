import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'

// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
import BookItem from './BookItem'

class ListBooks extends Component {
	// state = {
	// 	books: []
	// }
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	// componentDidMount() {
  //   BooksAPI.getAll().then((books) => {
	// 		console.log(books)
  //     this.setState({ books })
  //   })
  // }


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
