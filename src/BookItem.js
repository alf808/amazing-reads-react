import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
//
//
// componentDidMount() {
//   BooksAPI.getAll().then((books) => {
// 		console.log(books)
//     this.setState({ books })
//   })
// }

// console.log(book)
class BookItem extends Component {
	state = {
		bshelf: this.props.book.shelf
	}

	onShelfChange = (event, bk) => {
		// this.setState({ bshelf: event.target.value })

		this.setState({ bshelf: event.target.value }, function () {
		    console.log(this.state.bshelf);
		})
		console.log(bk)
		// console.log(book.shelf)
		// console.log(event.target.value)
		// console.log(this.state.bshelf)

    // let newShelf = event.target.value

    // BooksAPI.update(book, event.target.value).then(() => {
      // book.shelf = shelfValue
      // this.setState(state => ({
      //   books:state.books.filter(b => b.id !== book.id).concat([ book ])
      // }))
    // })
    //this.browserHistory.push('/');
  }

	// this.setState({ this.state.bs: book.shelf })
	render () {
		const { book } = this.props
		// const { bs } = this.state
		// console.log(book.shelf)
		return (
			<li>
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
		)
	}
}

export default BookItem
