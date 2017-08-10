import React, { Component } from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

/**
 * @description an intermediary container component
 * @prop books
 * @type Array required
 * @prop onShelfChange
 * @type Function required
 */
class BookShelves extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	render() {
		const { books, bs, friendlybs, onShelfChange } = this.props

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{friendlybs}</h2>
				<div className="bookshelf-books">
					<ListBooks bs={bs} books={books} onShelfChange={onShelfChange} />
				</div>
			</div>
		)
	}
}

export default BookShelves
