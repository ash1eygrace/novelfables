import React from 'react';
import BookList from './Components/BookList';

const books = [
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
  return (
    <div>
      <h1>Book List</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;