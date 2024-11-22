// src/redux/actions/recipeActions.js
import axios from "axios";
import { deleteRecipe } from "../redux/actions/recipeActions";
import { addRecipe } from "../redux/actions/recipeActions";
import { fetchRecipes } from "../redux/actions/recipeActions";


export const fetchRecipes = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/recipes");
  dispatch({ type: "FETCH_RECIPES", payload: response.data });
};

export const addRecipe = (recipe) => async (dispatch) => {
  const response = await axios.post("http://localhost:3001/recipes", recipe);
  dispatch({ type: "ADD_RECIPE", payload: response.data });
};

export const deleteRecipe = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/recipes/${id}`);
  dispatch({ type: "DELETE_RECIPE", payload: id });
};
