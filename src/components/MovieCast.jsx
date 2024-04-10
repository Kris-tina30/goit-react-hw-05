import React from 'react';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from './services/api';
import CastItem from './CastItem';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        <CastItem cast={cast} />
      </ul>
    </div>
  );
};

export default MovieCast;
