import React, { Component } from 'react'
import ListBooks from './ListBooks'

class BookShelves extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.friendlybs}</h2>
				<div className="bookshelf-books">
					<ListBooks bs={this.props.bs} books={this.props.books} onShelfChange={this.props.onShelfChange} />
				</div>
			</div>
		)
	}
}

export default BookShelves
