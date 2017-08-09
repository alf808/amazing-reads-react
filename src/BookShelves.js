import React from 'react'
import ListBooks from './ListBooks'

function BookShelves(props) {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.friendlybs}</h2>
			<div className="bookshelf-books">
				<ListBooks bs={props.bs} books={props.books} onShelfChange={props.onShelfChange} />
			</div>
		</div>
	)
}

export default BookShelves
