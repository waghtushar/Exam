// src/components/RecipeList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/actions/actions/recipeActions";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="container my-4">
      <h2>Recipe List</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 my-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
