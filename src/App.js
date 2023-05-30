import React, { useState } from 'react';
import axios from 'axios';
import BookList from './Components/BookList';

const initialBooks = [
  {
    id: 1,
    image: 'https://www.goodreads.com/book/cover/show/403769.The_Hitchhiker_s_Guide_to_the_Galaxy',
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
  },
  {
    id: 2,
    image: 'https://www.goodreads.com/book/cover/show/115780.The_Lord_of_the_Rings',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    id: 3,
    image: 'https://www.goodreads.com/book/cover/show/11112.Harry_Potter_and_the_Sorcerer_s_Stone',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
  },
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [header, setHeader] = useState("Book List");

  const searchBooks = async (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`
    );
    const books = response.data.items.map((book) => {
      const image = book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : ''; 
      const title = book.volumeInfo.title;
      const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : '';
      return { id: book.id, image, title, author };
    });
    setBooks(books);
    setHeader("Search Results");
  };


  return (
    <div>
      <h1>{header}</h1>
      <form onSubmit={searchBooks}>
        <input type="text" name="search" placeholder="Search for books" />
        <button type="submit">Search</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default App;
