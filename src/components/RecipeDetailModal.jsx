import React from 'react';
import './RecipeDetailModal.css';

function RecipeDetailModal({ recipe, closeModal }) {
  // Log to check if recipe is being passed correctly
  console.log("Recipe in Modal:", recipe);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>{recipe?.name}</h2>

        {/* Display Recipe Image if exists */}
        {recipe?.image && (
          <img src={recipe.image} alt={recipe.name} className="modal-image" />
        )}

        {/* Display Recipe Details */}
        <p><strong>Prep Time:</strong> {recipe?.prepTime} minutes</p>
        <p><strong>Cook Time:</strong> {recipe?.cookTime} minutes</p>
        <p><strong>Difficulty:</strong> {recipe?.difficulty}</p>
        <p><strong>Calories per Serving:</strong> {recipe?.calories} kcal</p>

        <h3>Ingredients:</h3>
        <ul>
          {recipe?.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <ol>
          {recipe?.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <p><strong>Servings:</strong> {recipe?.servings}</p>
      </div>
    </div>
  );
}

export default RecipeDetailModal;
