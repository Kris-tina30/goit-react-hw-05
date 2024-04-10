import React from 'react';

const ReviewsItem = ({ reviews }) => {
  return reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });
};

export default ReviewsItem;
