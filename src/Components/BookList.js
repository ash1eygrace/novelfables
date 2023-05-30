import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Book image={book.image} title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;