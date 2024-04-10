import React from 'react';

const CastItem = ({ cast }) => {
  return cast.map(({ id, name, profile_path, character }) => {
    return (
      <li key={id}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width="200" />
          <div>
            <h4>{name}</h4>
            <p>{character}</p>
          </div>
        </div>
      </li>
    );
  });
};

export default CastItem;
