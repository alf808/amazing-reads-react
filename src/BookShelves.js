import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class BookShelves extends Component {
	state = {
    books: [],
    // showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
			console.log(books)
      this.setState({ books })
    })
  }

	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.friendlybs}</h2>
				<div className="bookshelf-books">
					<ListBooks books={this.state.books} bs={this.props.bs}/>
				</div>
			</div>
		)
	}
}

export default BookShelves
