// src/components/RecipeDetails.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteRecipe } from "../redux/actions/actions/recipeActions";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteRecipe(id));
    navigate("/recipes");
  };

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="container my-4">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
