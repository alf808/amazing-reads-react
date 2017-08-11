# Amazing Reads Project
## Introduction
This single web application written in React allows users to shelve books from an exclusive collection of books
curated by the makers of BooksAPI.

Users may shelve books into 3 digital
compartments, namely _Currently Reading_, _Want to Read_, and _Read_.

## Description of React Components
There are 5 main components.
* The root **App** component is the parent component.
* The base **BookItem** component is youngest child.
* The intermediary **BookShelves** and
* **ListBooks** serve as containers and conveyors of props from parent to child.
* The **SearchAmazingBooks** component retrieves results from the BooksAPI.

## Issues
With the unidirectional flow of data from parent to child, it became rather tedious to pass states through props in intermediary components.
It would be more convenient if down through the intermediary components, they knew what states were being passed without having to explicitly state in code.

## Pre-installation Choices
One could start this project from scratch. Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project. I instead chose to clone the [skeleton project](https://github.com/udacity/reactnd-project-myreads-starter)

## What You're Getting from Skeleton
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
 |-- App.js - This is the root of the app.
 |-- App.css - Styles for your app. Customize as desired.
 |-- App.test.js - Used for testing. Provided with Create React App.
 Testing is encouraged, but not required.
 |-- BooksAPI.js - A JavaScript API for the provided backend.
 Instructions for the methods are below.
 |-- index.js - No need to modify this file. It is used for DOM rendering only.
 |-- index.css - Global styles. No need to change anything here.
|-- .gitignore
|-- CONTRIBUTING.MD - Information about contributing to this repo.
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
for you to use with your app.
|-- package.json - npm package manager file. No need to modify this.
```

## Installation (on a terminal)
**Back-end**
Clone the github repository, install dependencies, and run server
```
$ git clone git@github.com:alf808/amazing-reads-server.git
$ yarn install
$ node server.js
```

**Front-end**
Clone the github repository, install dependencies, and run front-end web
```
$ git clone git@github.com:alf808/amazing-reads-react.git
$ yarn install
$ yarn start
```

### When you run the web app
You should get a screen like below:
![alt text](./src/react-project1-a.png)

Each book has a control that lets you select the shelf for that book.

When you do a search, the books in results can also be placed in your MyReads shelves:
![alt text](./src/correct-use-of-state.gif)
## Backend Server

For the developers, a backend server is provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

#### `getAll()`
* This collection represents the books currently in the bookshelves in the app.

#### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  

#### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Search results are capped at 20, even if this is set higher.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend. Searches for Basket Weaving or Bubble Wrap don't come back with any results.

## References
* the great React Udacity lessons
* https://facebook.github.io/react/docs/thinking-in-react.html
* https://facebook.github.io/react/docs/react-component.html
* https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
* https://stackoverflow.com/questions/44499919/the-context-router-is-marked-as-required-in-link-but-its-value-is-undefine
* hesitantly, I do have to credit some hints I got from slack which has surprising utility in spite of haphazard usage
