import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './reducers';

const store = configureStore({
  reducer: {
    recipes: recipeReducer
  }
});

export default store;
