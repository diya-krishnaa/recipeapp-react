import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from './redux/actions';

import RecipeDetailModal from './components/RecipeDetailModal';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);

  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const recipesPerPage = 9; // Number of recipes to display per page (3 rows x 3 cards)

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination details
  const totalRecipes = filteredRecipes.length;
  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchRecipes(1)); // Fetch initial recipes
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
    setCurrentPage(1); // Reset to the first page when search term changes
  };

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewDetails = (recipe) => {
    setSelectedRecipe({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      prepTime: recipe.prepTimeMinutes,
      cookTime: recipe.cookTimeMinutes,
      servings: recipe.servings,
      difficulty: recipe.difficulty,
      calories: recipe.caloriesPerServing,
    });
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Recipe Listing</h1>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by cuisine..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button">
          <i className="search-icon fas fa-search"></i>
        </button>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-info">
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <button
                  className="view-details"
                  onClick={() => handleViewDetails(recipe)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found for the selected cuisine.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Show Recipe Details Modal */}
      {selectedRecipe && <RecipeDetailModal recipe={selectedRecipe} closeModal={closeModal} />}
    </div>
  );
}

export default App;
