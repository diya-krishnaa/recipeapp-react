import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
    </div>
  );
};

export default RecipeDetail;

