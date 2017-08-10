import React from 'react'
import ListBooks from './ListBooks'

/**
 * @description an intermediary container stateless component
 */
function BookShelves(props) {
	const { books, bs, friendlybs, onShelfChange } = props

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{friendlybs}</h2>
			<div className="bookshelf-books">
				<ListBooks bs={bs} books={books} onShelfChange={onShelfChange} />
			</div>
		</div>
	)
}

export default BookShelves
