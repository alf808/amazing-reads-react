import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * @description Base book component
 * @prop book
 * @type object required
 * @prop onShelfChange
 * @type function required
 */
class BookItem extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	state = {
		bshelf: '',
	}

	onJustThisShelfChange = (event) => {
		this.setState({ bshelf: event.target.value }, () => {
			this.props.onShelfChange(this.props.book, this.state.bshelf)
		})
	}

	render () {
		const { book } = this.props
		if (!book.shelf) {book.shelf = "none"}

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
						</div>
						<div className="book-shelf-changer">
							<select defaultValue={book.shelf} onChange={(event) => this.onJustThisShelfChange(event)}>
								<option value="none" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors ? book.authors.join(", ") : ''}</div>
				</div>
			</li>
		)
	}
}

export default BookItem
