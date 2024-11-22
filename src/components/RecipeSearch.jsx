import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCuisineFilter } from '../redux/actions';

const RecipeSearch = () => {
  const [cuisine, setCuisine] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setCuisineFilter(cuisine));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by Cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default RecipeSearch;

