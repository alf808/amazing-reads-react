import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array
	}

	onShelfChange(event, book) {
		console.log(book)
		console.log(book.shelf)
		console.log(event.target.value)
		console.log(this.state)

    // let shelfValue = event.target.value

    // BooksAPI.update(book, event.target.value).then(() => {
      // book.shelf = shelfValue
			// this.setState({book.shelf: event.target.value})
      // this.setState(state => ({
      //   books:state.books.filter(b => b.id !== book.id).concat([ book ])
      // }))
    // })
    //this.browserHistory.push('/');
  }

	render () {
		const { books, bs } = this.props

		let showingBooks = books.filter((book) => book.shelf === bs)

		// showingBooks.sort(sortBy('shelf'))
		// {console.log({showingBooks})}
		// {book.writers = book.authors.join(" ")}
// onChange={(event) => onShelfChange(event, book)}
		return (
			<ol className="books-grid">
			{showingBooks.map((book) => (
				<li key={book.id}>
					<div className="book">
						<div className="book-top">
							<div className="book-cover" style={{ width: 128, height: 193,
							backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
							</div>
							<div className="book-shelf-changer">
								<select defaultValue={book.shelf} onChange={(event) => this.onShelfChange(event, book)}>
									<option value="none" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.authors.join(", ")}</div>
					</div>
				</li>
			))}
			</ol>
		)

	}
}

export default ListBooks
