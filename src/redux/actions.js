import axios from 'axios';

export const fetchRecipes = (page = 1, cuisine = '') => async (dispatch) => {
  try {
    const response = await axios.get(`https://dummyjson.com/recipes`, {
      params: { page, cuisine }
    });
    dispatch({
      type: 'FETCH_RECIPES',
      payload: response.data
    });
  } catch (error) {
    console.error('Error fetching recipes', error);
  }
};

export const setCuisineFilter = (cuisine) => ({
  type: 'SET_CUISINE_FILTER',
  payload: cuisine
});
