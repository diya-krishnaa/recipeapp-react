const initialState = {
  recipes: [],
  filteredRecipes: [],
  cuisine: '',
  pagination: { currentPage: 1, totalPages: 1 } // Ensure pagination is initialized correctly
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES':
      return {
        ...state,
        recipes: action.payload.recipes,
        filteredRecipes: action.payload.recipes,
        pagination: action.payload.pagination // Ensure the payload has pagination
      };
    case 'SET_CUISINE_FILTER':
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        cuisine: action.payload,
        filteredRecipes
      };
    default:
      return state;
  }
};

export default recipeReducer;
