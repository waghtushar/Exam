// src/components/RecipeForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/actions/recipeActions";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addRecipe({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container my-4">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
