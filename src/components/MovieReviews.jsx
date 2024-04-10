import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from './services/api';
import ReviewsItem from './ReviewsItem';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieReviews = async () => {
      try {
        const results = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        <ReviewsItem reviews={reviews} />
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default MovieReviews;
