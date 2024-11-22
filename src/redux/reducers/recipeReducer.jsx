// src/redux/reducers/recipeReducer.js
const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.payload;
    case "ADD_RECIPE":
      return [...state, action.payload];
    case "DELETE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};

export default recipeReducer;
