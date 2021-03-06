import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchAmazingBooks from './SearchAmazingBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

/**
 * @description root app component
 * @state books contains an array of book objects
 * @type Array
 */
class BooksApp extends React.Component {
	state = {
		books: []
	}
	// async request to BooksAPI to retrieve MyReads collection of books
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}
	// This allows to dynamically change the shelf of any book among
	// the following categories: currentlyReading, wantToRead, and read
	// the code of function onShelfChange is an amalgam of code I wrote
	// and code I saw on slack
	onShelfChange = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() => {
			book.shelf = shelf
			this.setState(state => ({
				books:state.books.filter(b => b.id !== book.id).concat([ book ])
			}))
		})
	}

	render() {
		const { books } = this.state

		return (
			<div className="app">
				<Route path="/search" render={() => (
					<SearchAmazingBooks onShelfChange={this.onShelfChange} books={books}/>
				)}
				/>

				<Route exact path="/" render={() => (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>

								<BookShelves bs="currentlyReading" friendlybs="Currently Reading"
									books={books} onShelfChange={this.onShelfChange} />

								<BookShelves bs="wantToRead" friendlybs="Want To Read"
									books={books} onShelfChange={this.onShelfChange} />

								<BookShelves bs="read" friendlybs="Read"
									books={books} onShelfChange={this.onShelfChange} />

							</div>
						</div>
						<div className="open-search">
								<Link
									to='/search'
								>Add a book</Link>
						</div>
					</div>
				)}
				/>
			</div>
		)
	}
}

export default BooksApp
