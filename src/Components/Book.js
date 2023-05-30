import React from 'react';

const Book = ({ image, title, author }) => {
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;