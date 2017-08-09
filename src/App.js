import React from 'react'
// import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: true,
    query: '',
    results: []
  }

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
    if (query.trim()) {
      BooksAPI.search(query, 20).then(books => this.setState({
        results: books
      }))
    } else {
      this.setState({
        results: []
      })
    }
    console.log(this.state.results.items)
	}

	clearQuery = () => {
		this.setState({ query: ''})
	}

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
// the code of onShelfChange is an amalgam of code I saw on slack
  onShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books:state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
                {/*JSON.stringify(this.state.query)*/}
              </div>
            </div>
            <div className="search-books-results">

              {/*this.state.results ? (
                <BookShelves bs="" friendlybs="" books={this.state.results} onShelfChange={this.onShelfChange} />
              ) : (
                <h3>No results</h3>
              )*/}
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelves bs="currentlyReading" friendlybs="Currently Reading" books={this.state.books} onShelfChange={this.onShelfChange} />
                <BookShelves bs="wantToRead" friendlybs="Want To Read" books={this.state.books} onShelfChange={this.onShelfChange} />
                <BookShelves bs="read" friendlybs="Read" books={this.state.books} onShelfChange={this.onShelfChange} />

              </div>
            </div>
            <div className="open-search">
                <Link
                  to='/search'
                >Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
