import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions';
import RecipeDetail from './RecipeDetail';
import RecipeSearch from './RecipeSearch';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { filteredRecipes, pagination } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes(pagination.currentPage));
  }, [pagination.currentPage, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(fetchRecipes(newPage));
  };

  return (
    <div>
      <RecipeSearch />
      <div>
        {filteredRecipes.map((recipe) => (
          <RecipeDetail key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <div>
        <button
          disabled={pagination.currentPage === 1}
          onClick={() => handlePageChange(pagination.currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={pagination.currentPage === pagination.totalPages}
          onClick={() => handlePageChange(pagination.currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeList;

